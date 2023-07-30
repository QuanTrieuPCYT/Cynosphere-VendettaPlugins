(function(l,m,_,I,a,p,U,g,D){"use strict";const{ScrollView:G}=g.General,{TableRowGroup:y,TableSwitchRow:A,TableRowIcon:u}=_.findByProps("TableRowGroup");function h(){U.useProxy(a.storage);const e=I.React.createElement(u,{source:D.getAssetIDByName("ic_my_account_24px"),variant:"blurple"}),t=I.React.createElement(u,{source:D.getAssetIDByName("ic_clear_all_24px"),variant:"blurple"}),n=I.React.createElement(u,{source:D.getAssetIDByName("clock"),variant:"blurple"});return I.React.createElement(G,{style:{flex:1}},I.React.createElement(y,null,I.React.createElement(A,{label:"Show Avatars",icon:e,value:a.storage.avatars??!1,onValueChange:function(r){return a.storage.avatars=r}}),I.React.createElement(A,{label:"No Inline Header",subLabel:"Puts header on a new line.",icon:t,value:a.storage.noInline??!1,onValueChange:function(r){return a.storage.noInline=r}}),I.React.createElement(A,{label:"Full Inline Timestamps",subLabel:"Shows un-truncated inline timestamps. Supports Custom Timestamps.",icon:n,value:a.storage.inlineTimestamps??!1,onValueChange:function(r){return a.storage.inlineTimestamps=r}}),I.React.createElement(A,{label:"Hide Reply Avatars",icon:e,value:a.storage.noReplyAvatars??!1,onValueChange:function(r){return a.storage.noReplyAvatars=r}})))}const O=_.findByName("RowManager"),R=_.findByProps("int2hex"),M=_.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:P}}=_.findByProps("colors","meta"),f=_.findByStoreName("GuildMemberStore"),v=_.findByStoreName("GuildStore"),T=_.findByProps("parseToAST");var i;(function(e){e[e.DEFAULT=0]="DEFAULT",e[e.RECIPIENT_ADD=1]="RECIPIENT_ADD",e[e.RECIPIENT_REMOVE=2]="RECIPIENT_REMOVE",e[e.CALL=3]="CALL",e[e.CHANNEL_NAME_CHANGE=4]="CHANNEL_NAME_CHANGE",e[e.CHANNEL_ICON_CHANGE=5]="CHANNEL_ICON_CHANGE",e[e.CHANNEL_PINNED_MESSAGE=6]="CHANNEL_PINNED_MESSAGE",e[e.USER_JOIN=7]="USER_JOIN",e[e.GUILD_BOOST=8]="GUILD_BOOST",e[e.GUILD_BOOST_TIER_1=9]="GUILD_BOOST_TIER_1",e[e.GUILD_BOOST_TIER_2=10]="GUILD_BOOST_TIER_2",e[e.GUILD_BOOST_TIER_3=11]="GUILD_BOOST_TIER_3",e[e.CHANNEL_FOLLOW_ADD=12]="CHANNEL_FOLLOW_ADD",e[e.GUILD_STREAM=13]="GUILD_STREAM",e[e.GUILD_DISCOVERY_DISQUALIFIED=14]="GUILD_DISCOVERY_DISQUALIFIED",e[e.GUILD_DISCOVERY_REQUALIFIED=15]="GUILD_DISCOVERY_REQUALIFIED",e[e.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING=16]="GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",e[e.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING=17]="GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",e[e.THREAD_CREATED=18]="THREAD_CREATED",e[e.REPLY=19]="REPLY",e[e.CHAT_INPUT_COMMAND=20]="CHAT_INPUT_COMMAND",e[e.THREAD_STARTER_MESSAGE=21]="THREAD_STARTER_MESSAGE",e[e.GUILD_INVITE_REMINDER=22]="GUILD_INVITE_REMINDER",e[e.CONTEXT_MENU_COMMAND=23]="CONTEXT_MENU_COMMAND",e[e.AUTO_MODERATION_ACTION=24]="AUTO_MODERATION_ACTION",e[e.ROLE_SUBSCRIPTION_PURCHASE=25]="ROLE_SUBSCRIPTION_PURCHASE",e[e.INTERACTION_PREMIUM_UPSELL=26]="INTERACTION_PREMIUM_UPSELL",e[e.STAGE_START=27]="STAGE_START",e[e.STAGE_END=28]="STAGE_END",e[e.STAGE_SPEAKER=29]="STAGE_SPEAKER",e[e.STAGE_RAISE_HAND=30]="STAGE_RAISE_HAND",e[e.STAGE_TOPIC=31]="STAGE_TOPIC",e[e.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION=32]="GUILD_APPLICATION_PREMIUM_SUBSCRIPTION",e[e.PRIVATE_CHANNEL_INTEGRATION_ADDED=33]="PRIVATE_CHANNEL_INTEGRATION_ADDED",e[e.PRIVATE_CHANNEL_INTEGRATION_REMOVED=34]="PRIVATE_CHANNEL_INTEGRATION_REMOVED",e[e.PREMIUM_REFERRAL=35]="PREMIUM_REFERRAL",e[e.GUILD_INCIDENT_ALERT_MODE_ENABLED=36]="GUILD_INCIDENT_ALERT_MODE_ENABLED",e[e.GUILD_INCIDENT_ALERT_MODE_DISABLED=37]="GUILD_INCIDENT_ALERT_MODE_DISABLED",e[e.GUILD_INCIDENT_REPORT_RAID=38]="GUILD_INCIDENT_REPORT_RAID",e[e.GUILD_INCIDENT_REPORT_FALSE_ALARM=39]="GUILD_INCIDENT_REPORT_FALSE_ALARM"})(i||(i={}));function H(e,t){const n=[],r=R.hex2int(e.tagBackgroundColor?R.int2hex(e.tagBackgroundColor):p.rawColors.BRAND_500),s=I.ReactNative.processColor(P(M.theme,p.semanticColors.TEXT_MUTED)),E=f.getMember(e.guildId,t.author.id),o=v.getGuild(e.guildId);if(t.timestamp&&!a.storage.noInline&&(n.push({content:[{content:a.storage.inlineTimestamps?t.__customTimestamp??t.timestamp.calendar():t.timestamp.format("HH:mm:ss"),type:"inlineCode"}],type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:s,messageChannelId:"0"},medium:!0}}),n.push({content:" ",type:"text"})),(a.storage.avatars??!1)&&t.author.avatar!=null){let c=`https://cdn.discordapp.com/avatars/${t.author.id}/${t.author.avatar}.${t.author.avatar.startsWith("a_")?"gif":"png"}?size=32`;E?.avatar&&(c=`https://cdn.discordapp.com/guilds/${e.guildId}/users/${e.authorId}/avatars/${E.avatar}.${E.avatar.startsWith("a_")?"gif":"png"}?size=32`);const L={guildId:"0",content:"",icon:c,type:"guild"};n.push(L),n.push({content:" ",type:"text"})}e.tagText&&!a.storage.noInline&&(n.push({content:[{content:e.tagText,type:"inlineCode"}],type:"mention",roleColor:r,color:r,colorString:R.int2hex(r)}),n.push({content:" ",type:"text"}));let N=e.username;e.username==t.author.username&&(N=t.nick??t.author.globalName??e.username);const d={content:[{content:[{content:N,type:"text"}],type:"strong"}],type:"link",target:"usernameOnClick",context:{username:!0,usernameOnClick:{action:"bindTapUsername",userId:t.author.id,linkColor:t.colorString?I.ReactNative.processColor(t.colorString):e.usernameColor,messageChannelId:e.channelId}}};if(n.push(d),E?.iconRoleId&&a.storage.noInline){const c=o.roles[E.iconRoleId];if(c.unicodeEmoji)n.push({content:" ",type:"text"}),n.push(T.parseToAST(c.unicodeEmoji)[0]);else if(c.icon){const L=`https://cdn.discordapp.com/role-icons/${E.iconRoleId}/${c.icon}.png?size=32`;n.push({content:" ",type:"text"}),n.push({guildId:"0",content:"",icon:L,type:"guild"})}}return e.tagText&&a.storage.noInline&&(n.push({content:" ",type:"text"}),n.push({content:[{content:e.tagText,type:"inlineCode"}],type:"mention",roleColor:r,color:r,colorString:R.int2hex(r)})),t.timestamp&&a.storage.noInline&&(n.push({content:" ",type:"text"}),n.push({content:[{content:t.__customTimestamp??t.timestamp.calendar(),type:"inlineCode"}],type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:s,messageChannelId:"0"},medium:!0}})),n}function S(e){for(const t of e)t.type=="emoji"||t.type=="customEmoji"?t.jumboable=!1:Array.isArray(t.content)&&S(t.content)}const C=[],B=function(){C.push(m.before("generate",O.prototype,function(e){let[t]=e;t.vd_cm_realIsFirst=t.isFirst,t.isFirst=!1,t.message&&(t.message.avatarURL=void 0)})),C.push(m.after("generate",O.prototype,function(e,t){let[n]=e;if(n.rowType!==1)return;const r=n.message,{message:s}=t;if(s.type!=i.DEFAULT&&s.type!=i.REPLY&&s.type!=i.CHAT_INPUT_COMMAND||(t.renderContentOnly=!0,s.avatarURL=void 0,s.shouldShowRoleOnName=!0,a.storage.noInline&&!n.vd_cm_realIsFirst))return;const E=H(s,r);if(s.content&&E.push({content:a.storage.noInline?`
`:" ",type:"text"}),s.content=[...E,...s.content??[]],a.storage.noInline||S(s.content),s.referencedMessage?.message&&a.storage.noReplyAvatars){const o=s.referencedMessage.message;o.avatarURL=void 0;const N={content:[{content:[{content:o.username,type:"text"}],type:"strong"}],type:"link",target:"usernameOnClick",context:{username:!0,usernameOnClick:{action:"bindTapUsername",userId:o.authorId,linkColor:o.usernameColor,messageChannelId:o.channelId}}};if(s.referencedMessage.systemContent){const d=s.referencedMessage.systemContent;delete s.referencedMessage.systemContent,o.content||(o.content=[{content:[{content:d,type:"text"}],type:"em"}]),o.attachments?.length>0?o.content=[...o.content,{content:" ",type:"text"},T.parseToAST("\u{1F5BC}")[0]]:o.stickers?.length>0?o.content=[...o.content,{content:" ",type:"text"},T.parseToAST("\u2728")[0]]:o.embeds?.length>0&&(o.content=[...o.content,{content:" ",type:"text"},T.parseToAST("\u{1F5D2}")[0]])}o.content=[N,{content:" ",type:"text"},...o.content??[]]}}))},x=function(){for(const e of C)e?.()};return l.onLoad=B,l.onUnload=x,l.settings=h,l})({},vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.ui,vendetta.storage,vendetta.ui.components,vendetta.ui.assets);