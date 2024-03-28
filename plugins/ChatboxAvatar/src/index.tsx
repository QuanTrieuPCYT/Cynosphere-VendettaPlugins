import {after, instead} from "@vendetta/patcher";
import {findByName, findByProps, findByStoreName} from "@vendetta/metro";
import {ReactNative} from "@vendetta/metro/common";
import {findInReactTree} from "@vendetta/utils";

const Flux = findByProps("useStateFromStores");

const ChatInput = findByName("ChatInput");
const Avatar = findByProps("AvatarSizes").default;
const {Pressable} = ReactNative;

const SelfPresenceStore = findByStoreName("SelfPresenceStore");
const UserStore = findByStoreName("UserStore");
const AuthenticationStore = findByStoreName("AuthenticationStore");

const showUserProfileActionSheet = findByName("showUserProfileActionSheet");
const ActionSheet = findByProps("openLazy", "hideActionSheet");
const StatusPickerActionSheet = findByName("StatusPickerActionSheet");
const Settings = findByProps("saveAccountChanges");
const {UserSettingsSections} = findByProps("UserSettingsSections");

function AvatarAction({channelId}) {
  const self = Flux.useStateFromStores([UserStore], () =>
    UserStore.getCurrentUser()
  );
  const status = Flux.useStateFromStores([SelfPresenceStore], () =>
    SelfPresenceStore.getStatus()
  );

  return (
    <Pressable
      style={{
        height: 40,
        width: 40,
        marginHorizontal: 4,
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      }}
      onLongPress={createOpenProfile(channelId)} 
      onPress={openStatus}
    >
      <Avatar
        user={self}
        status={status}
        avatarDecoration={self.avatarDecoration}
        animate={true}
        // autoStatusCutout={DEFAULT_STATUS_CUTOUT}
      />
    </Pressable>
  );
}

function createOpenProfile(channelId) {
  return () => {
    showUserProfileActionSheet({
      userId: AuthenticationStore.getId(),
      channelId,
    });
  };
}

function openStatus() {
  ActionSheet.hideActionSheet();
  ActionSheet.openLazy(
    async function () {
      return StatusPickerActionSheet;
    },
    "StatusPicker",
    {
      onSetCustomStatus: function () {
        ActionSheet.hideActionSheet();
        Settings.open(UserSettingsSections.CUSTOM_STATUS, null, {
          openWithoutBackstack: true,
        });
      },
    }
  );
}

const patches = [];

export const onLoad = () => {
  // add button
  patches.push(
    after("render", ChatInput.prototype, (args, ret) => {
      const channel = findInReactTree(
        ret,
        (x) => "channel" in x.props && x.props.channel
      ).props.channel;
      const actions = findInReactTree(
        ret,
        (x) => "forceAnimateButtons" in x.props && x.props.actions
      ).props.actions;
      const existing = actions.find((action) => "__vd_chatboxAvatar" in action);
      if (existing) return;

      const avatarAction = {
        __vd_chatboxAvatar: true,
        IconComponent: () => <AvatarAction channelId={channel.id} />,
        active: false,
        disabled: false,
      };
      actions.splice(0, 0, avatarAction);
    })
  );
};

export const onUnload = () => {
  for (const unpatch of patches) {
    unpatch?.();
  }
};
