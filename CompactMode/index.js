(function(A,m,_,s,a,O,g,U,R){"use strict";const{ScrollView:G}=U.General,{TableRowGroup:h,TableSwitchRow:i,TableRowIcon:T}=_.findByProps("TableRowGroup");function y(){g.useProxy(a.storage);const e=s.React.createElement(T,{source:R.getAssetIDByName("ic_my_account_24px"),variant:"blurple"}),t=s.React.createElement(T,{source:R.getAssetIDByName("ic_clear_all_24px"),variant:"blurple"}),o=s.React.createElement(T,{source:R.getAssetIDByName("clock"),variant:"blurple"}),I=s.React.createElement(T,{source:R.getAssetIDByName("ic_ad_text"),variant:"blurple"});return s.React.createElement(G,{style:{flex:1}},s.React.createElement(h,null,s.React.createElement(i,{label:"Show Avatars",icon:e,value:a.storage.avatars??!1,onValueChange:function(n){return a.storage.avatars=n}}),s.React.createElement(i,{label:"No Inline Header",subLabel:"Puts header on a new line.",icon:t,value:a.storage.noInline??!1,onValueChange:function(n){return a.storage.noInline=n}}),s.React.createElement(i,{label:"Full Inline Timestamps",subLabel:"Shows un-truncated inline timestamps. Supports Custom Timestamps.",icon:o,value:a.storage.inlineTimestamps??!1,onValueChange:function(n){return a.storage.inlineTimestamps=n}}),s.React.createElement(i,{label:"Hide Reply Avatars",icon:e,value:a.storage.noReplyAvatars??!1,onValueChange:function(n){return a.storage.noReplyAvatars=n}}),s.React.createElement(i,{label:"Bigger username header",icon:I,value:a.storage.biggerHeader??!1,onValueChange:function(n){return a.storage.biggerHeader=n}})))}const p=_.findByName("RowManager"),N=_.findByProps("int2hex"),M=_.findByStoreName("ThemeStore"),{meta:{resolveSemanticColor:P}}=_.findByProps("colors","meta"),v=_.findByStoreName("GuildMemberStore"),f=_.findByStoreName("GuildStore"),D=_.findByProps("parseToAST");var l;(function(e){e[e.DEFAULT=0]="DEFAULT",e[e.RECIPIENT_ADD=1]="RECIPIENT_ADD",e[e.RECIPIENT_REMOVE=2]="RECIPIENT_REMOVE",e[e.CALL=3]="CALL",e[e.CHANNEL_NAME_CHANGE=4]="CHANNEL_NAME_CHANGE",e[e.CHANNEL_ICON_CHANGE=5]="CHANNEL_ICON_CHANGE",e[e.CHANNEL_PINNED_MESSAGE=6]="CHANNEL_PINNED_MESSAGE",e[e.USER_JOIN=7]="USER_JOIN",e[e.GUILD_BOOST=8]="GUILD_BOOST",e[e.GUILD_BOOST_TIER_1=9]="GUILD_BOOST_TIER_1",e[e.GUILD_BOOST_TIER_2=10]="GUILD_BOOST_TIER_2",e[e.GUILD_BOOST_TIER_3=11]="GUILD_BOOST_TIER_3",e[e.CHANNEL_FOLLOW_ADD=12]="CHANNEL_FOLLOW_ADD",e[e.GUILD_STREAM=13]="GUILD_STREAM",e[e.GUILD_DISCOVERY_DISQUALIFIED=14]="GUILD_DISCOVERY_DISQUALIFIED",e[e.GUILD_DISCOVERY_REQUALIFIED=15]="GUILD_DISCOVERY_REQUALIFIED",e[e.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING=16]="GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",e[e.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING=17]="GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",e[e.THREAD_CREATED=18]="THREAD_CREATED",e[e.REPLY=19]="REPLY",e[e.CHAT_INPUT_COMMAND=20]="CHAT_INPUT_COMMAND",e[e.THREAD_STARTER_MESSAGE=21]="THREAD_STARTER_MESSAGE",e[e.GUILD_INVITE_REMINDER=22]="GUILD_INVITE_REMINDER",e[e.CONTEXT_MENU_COMMAND=23]="CONTEXT_MENU_COMMAND",e[e.AUTO_MODERATION_ACTION=24]="AUTO_MODERATION_ACTION",e[e.ROLE_SUBSCRIPTION_PURCHASE=25]="ROLE_SUBSCRIPTION_PURCHASE",e[e.INTERACTION_PREMIUM_UPSELL=26]="INTERACTION_PREMIUM_UPSELL",e[e.STAGE_START=27]="STAGE_START",e[e.STAGE_END=28]="STAGE_END",e[e.STAGE_SPEAKER=29]="STAGE_SPEAKER",e[e.STAGE_RAISE_HAND=30]="STAGE_RAISE_HAND",e[e.STAGE_TOPIC=31]="STAGE_TOPIC",e[e.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION=32]="GUILD_APPLICATION_PREMIUM_SUBSCRIPTION",e[e.PRIVATE_CHANNEL_INTEGRATION_ADDED=33]="PRIVATE_CHANNEL_INTEGRATION_ADDED",e[e.PRIVATE_CHANNEL_INTEGRATION_REMOVED=34]="PRIVATE_CHANNEL_INTEGRATION_REMOVED",e[e.PREMIUM_REFERRAL=35]="PREMIUM_REFERRAL",e[e.GUILD_INCIDENT_ALERT_MODE_ENABLED=36]="GUILD_INCIDENT_ALERT_MODE_ENABLED",e[e.GUILD_INCIDENT_ALERT_MODE_DISABLED=37]="GUILD_INCIDENT_ALERT_MODE_DISABLED",e[e.GUILD_INCIDENT_REPORT_RAID=38]="GUILD_INCIDENT_REPORT_RAID",e[e.GUILD_INCIDENT_REPORT_FALSE_ALARM=39]="GUILD_INCIDENT_REPORT_FALSE_ALARM"})(l||(l={}));function H(e,t){const o=[],I=N.hex2int(e.tagBackgroundColor?N.int2hex(e.tagBackgroundColor):O.rawColors.BRAND_500),n=s.ReactNative.processColor(P(M.theme,O.semanticColors.TEXT_MUTED)),E=v.getMember(e.guildId,t.author.id),r=f.getGuild(e.guildId);if(t.timestamp&&!a.storage.noInline&&(o.push({content:[{content:a.storage.inlineTimestamps?t.__customTimestamp??t.timestamp.calendar():t.timestamp.format("HH:mm:ss"),type:"inlineCode"}],type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:n,messageChannelId:"0"},medium:!0}}),o.push({content:" ",type:"text"})),(a.storage.avatars??!1)&&t.author.avatar!=null){let c=`https://cdn.discordapp.com/avatars/${t.author.id}/${t.author.avatar}.${t.author.avatar.startsWith("a_")?"gif":"png"}?size=32`;E?.avatar&&(c=`https://cdn.discordapp.com/guilds/${e.guildId}/users/${e.authorId}/avatars/${E.avatar}.${E.avatar.startsWith("a_")?"gif":"png"}?size=32`);const L={guildId:"0",content:"",icon:c,type:"guild"};o.push(L),o.push({content:" ",type:"text"})}e.tagText&&!a.storage.noInline&&(o.push({content:[{content:e.tagText,type:"inlineCode"}],type:"mention",roleColor:I,color:I,colorString:N.int2hex(I)}),o.push({content:" ",type:"text"}));let u=e.username;e.username==t.author.username&&(u=t.nick??t.author.globalName??e.username);const d={content:[{content:[{content:u,type:"text"}],type:"strong"}],type:"link",target:"usernameOnClick",context:{username:!0,usernameOnClick:{action:"bindTapUsername",userId:t.author.id,linkColor:t.colorString?s.ReactNative.processColor(t.colorString):e.usernameColor,messageChannelId:e.channelId}}};if(o.push(d),E?.iconRoleId&&a.storage.noInline){const c=r.roles[E.iconRoleId];if(c.unicodeEmoji)o.push({content:" ",type:"text"}),o.push(D.parseToAST(c.unicodeEmoji)[0]);else if(c.icon){const L=`https://cdn.discordapp.com/role-icons/${E.iconRoleId}/${c.icon}.png?size=32`;o.push({content:" ",type:"text"}),o.push({guildId:"0",content:"",icon:L,type:"guild"})}}return e.tagText&&a.storage.noInline&&(o.push({content:" ",type:"text"}),o.push({content:[{content:e.tagText,type:"inlineCode"}],type:"mention",roleColor:I,color:I,colorString:N.int2hex(I)})),t.timestamp&&a.storage.noInline&&(o.push({content:" ",type:"text"}),o.push({content:[{content:t.__customTimestamp??t.timestamp.calendar(),type:"inlineCode"}],type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:n,messageChannelId:"0"},medium:!0}})),o}function S(e){for(const t of e)t.type=="emoji"||t.type=="customEmoji"?t.jumboable=!1:Array.isArray(t.content)&&S(t.content)}const C=[],B=function(){C.push(m.before("generate",p.prototype,function(e){let[t]=e;t.vd_cm_realIsFirst=t.isFirst,t.isFirst=!1,t.message&&(t.message.avatarURL=void 0)})),C.push(m.after("generate",p.prototype,function(e,t){let[o]=e;if(o.rowType!==1)return;const I=o.message,{message:n}=t;if(n.type!=l.DEFAULT&&n.type!=l.REPLY&&n.type!=l.CHAT_INPUT_COMMAND||(t.renderContentOnly=!0,n.avatarURL=void 0,n.shouldShowRoleOnName=!0,a.storage.noInline&&!o.vd_cm_realIsFirst))return;const E=H(n,I);if(n.content&&E.push({content:a.storage.noInline?`
`:" ",type:"text"}),a.storage.biggerHeader?n.content=[{level:3,content:E,type:"heading"},...n.content??[]]:n.content=[...E,...n.content??[]],a.storage.noInline||S(n.content),n.referencedMessage?.message&&a.storage.noReplyAvatars){const r=n.referencedMessage.message;r.avatarURL=void 0;const u={content:[{content:[{content:r.username,type:"text"}],type:"strong"}],type:"link",target:"usernameOnClick",context:{username:!0,usernameOnClick:{action:"bindTapUsername",userId:r.authorId,linkColor:r.usernameColor,messageChannelId:r.channelId}}};if(n.referencedMessage.systemContent){const d=n.referencedMessage.systemContent;delete n.referencedMessage.systemContent,r.content||(r.content=[{content:[{content:d,type:"text"}],type:"em"}]),r.attachments?.length>0?r.content=[...r.content,{content:" ",type:"text"},D.parseToAST("\u{1F5BC}")[0]]:r.stickers?.length>0?r.content=[...r.content,{content:" ",type:"text"},D.parseToAST("\u2728")[0]]:r.embeds?.length>0&&(r.content=[...r.content,{content:" ",type:"text"},D.parseToAST("\u{1F5D2}")[0]])}r.content=[u,{content:" ",type:"text"},...r.content??[]]}}))},x=function(){for(const e of C)e?.()};return A.onLoad=B,A.onUnload=x,A.settings=y,A})({},vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.ui,vendetta.storage,vendetta.ui.components,vendetta.ui.assets);
