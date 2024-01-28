(function(N,g,l,i,o,h,G,f,T){"use strict";const{ScrollView:M}=f.General,{TableRowGroup:P,TableSwitchRow:A,TableRowIcon:C}=l.findByProps("TableRowGroup");function b(){G.useProxy(o.storage);const e=i.React.createElement(C,{source:T.getAssetIDByName("ic_my_account_24px"),variant:"blurple"}),t=i.React.createElement(C,{source:T.getAssetIDByName("ic_clear_all_24px"),variant:"blurple"}),n=i.React.createElement(C,{source:T.getAssetIDByName("clock"),variant:"blurple"}),c=i.React.createElement(C,{source:T.getAssetIDByName("ic_ad_text")??T.getAssetIDByName("icon-qs-files"),variant:"blurple"});return i.React.createElement(M,{style:{flex:1}},i.React.createElement(P,null,i.React.createElement(A,{label:"Show Avatars",icon:e,value:o.storage.avatars??!1,onValueChange:function(s){return o.storage.avatars=s}}),i.React.createElement(A,{label:"No Inline Header",subLabel:"Puts header on a new line.",icon:t,value:o.storage.noInline??!1,onValueChange:function(s){return o.storage.noInline=s}}),i.React.createElement(A,{label:"Full Inline Timestamps",subLabel:"Shows un-truncated inline timestamps. Supports Custom Timestamps.",icon:n,value:o.storage.inlineTimestamps??!1,onValueChange:function(s){return o.storage.inlineTimestamps=s}}),i.React.createElement(A,{label:"Hide Reply Avatars",icon:e,value:o.storage.noReplyAvatars??!1,onValueChange:function(s){return o.storage.noReplyAvatars=s}}),i.React.createElement(A,{label:"Bigger username header",icon:c,value:o.storage.biggerHeader??!1,onValueChange:function(s){return o.storage.biggerHeader=s}})))}var p,L;const v=l.findByName("RowManager"),D=l.findByProps("int2hex"),m=l.findByProps("parseToAST"),B=((p=l.find(function(e){var t,n;return(n=e.default)===null||n===void 0||(t=n.internal)===null||t===void 0?void 0:t.resolveSemanticColor}))===null||p===void 0?void 0:p.default.internal.resolveSemanticColor)??((L=l.find(function(e){var t;return(t=e.meta)===null||t===void 0?void 0:t.resolveSemanticColor}))===null||L===void 0?void 0:L.meta.resolveSemanticColor)??function(){return"#ff00ff"},x=l.findByStoreName("ThemeStore"),H=l.findByStoreName("GuildMemberStore"),V=l.findByStoreName("GuildStore");var y;(function(e){e[e.DEFAULT=0]="DEFAULT",e[e.RECIPIENT_ADD=1]="RECIPIENT_ADD",e[e.RECIPIENT_REMOVE=2]="RECIPIENT_REMOVE",e[e.CALL=3]="CALL",e[e.CHANNEL_NAME_CHANGE=4]="CHANNEL_NAME_CHANGE",e[e.CHANNEL_ICON_CHANGE=5]="CHANNEL_ICON_CHANGE",e[e.CHANNEL_PINNED_MESSAGE=6]="CHANNEL_PINNED_MESSAGE",e[e.USER_JOIN=7]="USER_JOIN",e[e.GUILD_BOOST=8]="GUILD_BOOST",e[e.GUILD_BOOST_TIER_1=9]="GUILD_BOOST_TIER_1",e[e.GUILD_BOOST_TIER_2=10]="GUILD_BOOST_TIER_2",e[e.GUILD_BOOST_TIER_3=11]="GUILD_BOOST_TIER_3",e[e.CHANNEL_FOLLOW_ADD=12]="CHANNEL_FOLLOW_ADD",e[e.GUILD_STREAM=13]="GUILD_STREAM",e[e.GUILD_DISCOVERY_DISQUALIFIED=14]="GUILD_DISCOVERY_DISQUALIFIED",e[e.GUILD_DISCOVERY_REQUALIFIED=15]="GUILD_DISCOVERY_REQUALIFIED",e[e.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING=16]="GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING",e[e.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING=17]="GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING",e[e.THREAD_CREATED=18]="THREAD_CREATED",e[e.REPLY=19]="REPLY",e[e.CHAT_INPUT_COMMAND=20]="CHAT_INPUT_COMMAND",e[e.THREAD_STARTER_MESSAGE=21]="THREAD_STARTER_MESSAGE",e[e.GUILD_INVITE_REMINDER=22]="GUILD_INVITE_REMINDER",e[e.CONTEXT_MENU_COMMAND=23]="CONTEXT_MENU_COMMAND",e[e.AUTO_MODERATION_ACTION=24]="AUTO_MODERATION_ACTION",e[e.ROLE_SUBSCRIPTION_PURCHASE=25]="ROLE_SUBSCRIPTION_PURCHASE",e[e.INTERACTION_PREMIUM_UPSELL=26]="INTERACTION_PREMIUM_UPSELL",e[e.STAGE_START=27]="STAGE_START",e[e.STAGE_END=28]="STAGE_END",e[e.STAGE_SPEAKER=29]="STAGE_SPEAKER",e[e.STAGE_RAISE_HAND=30]="STAGE_RAISE_HAND",e[e.STAGE_TOPIC=31]="STAGE_TOPIC",e[e.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION=32]="GUILD_APPLICATION_PREMIUM_SUBSCRIPTION",e[e.PRIVATE_CHANNEL_INTEGRATION_ADDED=33]="PRIVATE_CHANNEL_INTEGRATION_ADDED",e[e.PRIVATE_CHANNEL_INTEGRATION_REMOVED=34]="PRIVATE_CHANNEL_INTEGRATION_REMOVED",e[e.PREMIUM_REFERRAL=35]="PREMIUM_REFERRAL",e[e.GUILD_INCIDENT_ALERT_MODE_ENABLED=36]="GUILD_INCIDENT_ALERT_MODE_ENABLED",e[e.GUILD_INCIDENT_ALERT_MODE_DISABLED=37]="GUILD_INCIDENT_ALERT_MODE_DISABLED",e[e.GUILD_INCIDENT_REPORT_RAID=38]="GUILD_INCIDENT_REPORT_RAID",e[e.GUILD_INCIDENT_REPORT_FALSE_ALARM=39]="GUILD_INCIDENT_REPORT_FALSE_ALARM"})(y||(y={}));function k(e,t){const n=[],c=D.hex2int(e.tagBackgroundColor?D.int2hex(e.tagBackgroundColor):h.rawColors.BRAND_500),s=i.ReactNative.processColor(B(x.theme,h.semanticColors.TEXT_MUTED)),E=H.getMember(e.guildId,t.author.id),a=V.getGuild(e.guildId);if(t.timestamp&&!o.storage.noInline&&(n.push({content:[{content:o.storage.inlineTimestamps?t.__customTimestamp??t.timestamp.calendar():t.timestamp.format("HH:mm:ss"),type:"inlineCode"}],type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:s,messageChannelId:"0"},medium:!0}}),n.push({content:" ",type:"text"})),(o.storage.avatars??!1)&&t.author.avatar!=null){let I=`https://cdn.discordapp.com/avatars/${t.author.id}/${t.author.avatar}.${t.author.avatar.startsWith("a_")?"gif":"png"}?size=32`;E?.avatar&&(I=`https://cdn.discordapp.com/guilds/${e.guildId}/users/${e.authorId}/avatars/${E.avatar}.${E.avatar.startsWith("a_")?"gif":"png"}?size=32`);const u={guildId:"0",content:"",icon:I,type:"guild"};n.push(u),n.push({content:" ",type:"text"})}e.tagText&&!o.storage.noInline&&(n.push({content:[{content:e.tagText,type:"inlineCode"}],type:"mention",roleColor:c,color:c,colorString:D.int2hex(c)}),n.push({content:" ",type:"text"}));let R=e.username;e.username==t.author.username&&(R=t.nick??t.author.globalName??e.username);const d={content:[{content:[{content:R,type:"text"}],type:"strong"}],type:"link",target:"usernameOnClick",context:{username:!0,usernameOnClick:{action:"bindTapUsername",userId:t.author.id,linkColor:t.colorString?i.ReactNative.processColor(t.colorString):e.usernameColor,messageChannelId:e.channelId}}};if(n.push(d),E?.iconRoleId&&o.storage.noInline){const I=a.roles[E.iconRoleId];if(I.unicodeEmoji)n.push({content:" ",type:"text"}),n.push(m.parseToAST(I.unicodeEmoji)[0]);else if(I.icon){const u=`https://cdn.discordapp.com/role-icons/${E.iconRoleId}/${I.icon}.png?size=32`;n.push({content:" ",type:"text"}),n.push({guildId:"0",content:"",icon:u,type:"guild"})}}return e.tagText&&o.storage.noInline&&(n.push({content:" ",type:"text"}),n.push({content:[{content:e.tagText,type:"inlineCode"}],type:"mention",roleColor:c,color:c,colorString:D.int2hex(c)})),t.timestamp&&o.storage.noInline&&(n.push({content:" ",type:"text"}),n.push({content:[{content:t.__customTimestamp??t.timestamp.calendar(),type:"inlineCode"}],type:"link",target:"usernameOnClick",context:{username:1,usernameOnClick:{action:"0",userId:"0",linkColor:s,messageChannelId:"0"},medium:!0}})),n}function U(e){for(const t of e)t.type=="emoji"||t.type=="customEmoji"?t.jumboable=!1:Array.isArray(t.content)&&U(t.content)}function F(e,t,n,c){return{type:"image",spoiler:c?i.i18n.Messages.SPOILER.toUpperCase():"",url:e,image:{url:e,proxyURL:e,width:t,height:n},fields:[],borderLeftColor:0,providerColor:0,headerTextColor:0,bodyTextColor:0}}const S=[],w=function(){S.push(g.before("generate",v.prototype,function(e){let[t]=e;t.vd_cm_realIsFirst=t.isFirst,t.isFirst=!1,t.message&&(t.message.avatarURL=void 0)})),S.push(g.after("generate",v.prototype,function(e,t){let[n]=e;var c,s;if(n.rowType!==1)return;const E=n.message,{message:a}=t;if(a.type!=0&&a.type!=19&&a.type!=20||(t.renderContentOnly=!0,a.avatarURL=void 0,a.shouldShowRoleOnName=!0,o.storage.noInline&&!n.vd_cm_realIsFirst))return;const R=k(a,E);if(a.content&&R.push({content:o.storage.noInline?`
`:" ",type:"text"}),o.storage.biggerHeader?a.content=[{level:3,content:R,type:"heading"},...a.content??[]]:a.content=[...R,...a.content??[]],o.storage.noInline||U(a.content),!((c=a.referencedMessage)===null||c===void 0)&&c.message&&o.storage.noReplyAvatars){const r=a.referencedMessage.message;r.avatarURL=void 0;const _={content:[{content:[{content:r.username,type:"text"}],type:"strong"}],type:"link",target:"usernameOnClick",context:{username:!0,usernameOnClick:{action:"bindTapUsername",userId:r.authorId,linkColor:r.usernameColor,messageChannelId:r.channelId}}};if(a.referencedMessage.systemContent){var d,I,u;const O=a.referencedMessage.systemContent;delete a.referencedMessage.systemContent,r.content||(r.content=[{content:[{content:O,type:"text"}],type:"em"}]),((d=r.attachments)===null||d===void 0?void 0:d.length)>0?r.content=[...r.content,{content:" ",type:"text"},m.parseToAST("\u{1F5BC}")[0]]:((I=r.stickers)===null||I===void 0?void 0:I.length)>0?r.content=[...r.content,{content:" ",type:"text"},m.parseToAST("\u2728")[0]]:((u=r.embeds)===null||u===void 0?void 0:u.length)>0&&(r.content=[...r.content,{content:" ",type:"text"},m.parseToAST("\u{1F5D2}")[0]])}r.content=[_,{content:" ",type:"text"},...r.content??[]]}if(((s=a.attachments)===null||s===void 0?void 0:s.length)>0){const r=a.attachments.filter(function(_){return _.attachmentType==="image"});if(r.length===1){const _=r[0];a.embeds.push(F(_.url,_.width,_.height,_.isSpoiler)),a.attachments=a.attachments.filter(function(O){return O.attachmentType!=="image"})}}}))},Y=function(){for(const e of S)e?.()};return N.onLoad=w,N.onUnload=Y,N.settings=b,N})({},vendetta.patcher,vendetta.metro,vendetta.metro.common,vendetta.plugin,vendetta.ui,vendetta.storage,vendetta.ui.components,vendetta.ui.assets);
