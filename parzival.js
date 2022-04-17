const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
})  

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onInteractionCreate()
bot.onMemberUpdate()
bot.onMessageDelete()
bot.onMessageUpdate()

////////// Durum \\\\\\\\\\
bot.status({
text:"Eklenen Kodları",
type:"WATCHING",
status:"online",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
  vip:"940931289601671238",
  banhammer:"940932758547619841",
  mutehammer:"954102620388216902",
  subhammer:"940931519319515187",
  subrol:"940931145783189545",
  member:"940930568147845170",
  tavsiyelog:"941959571335938068",
  admin:"940932232456052756",
  staff:"940931897314406491",
  tkategori:"940988399525969961",
  prefix:".",
  snipe1:"",
  snipe2:"",
  snipe3:"",
  afk:"no",
  afksayı:"0",
  afksebep:"",
  subsayı:"0",
  staffpuan:"0",
  tticket:"",
  tsayı:"0",
  tuser:"",
  ykategori:"",
  ylog:"",
  ybaşvuru:"no",
  ysoru1:"",
  ysoru2:"",
  ysoru3:"",
  ysoru4:"",
  ysoru5:"",
  ycevap1:"",
  ycevap2:"",
  ycevap3:"",
  ycevap4:"",
  ycevap5:"",
  cross:"<:flora_cross:950475138778943588>",
  tick:"<:flora_tick:950474824462004224>",
  spams:"kapalı",
  spam:"-3",
  hex:"RANDOM"
})

//////////// Komutlar \\\\\\\\\\


//Raid engel 
bot.command({
  name:"$alwaysExecute",
  code:`
  $onlyIf[$mentionedUsersCount<=4;{execute:raid}]
  $onlyIf[$mentioned[1;no]!=undefined;]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
  `
  })

bot.awaitedCommand({
  name:"raid",
  code:`
  $timeoutMember[$guildID;$authorID;30m;no;5'den fazla etiket]
  $author[1;Kullanıcı mutelendi!;$authorAvatar;https://discordapp.com/users/$authorID]
  $addField[1;Sebep;\`Raid Engel ( 5'den fazla etiket )\`]
  $addField[1;Yetkili;<@$clientID> - \`($clientID)\`]
  $addField[1;Kullanıcı;<@$authorID> - \`($authorID)\`]
  $color[1;BLACK]
  $deleteCommand
  `
  })

//Link engel
bot.command({
  name:"$alwaysExecute",
  code:`
  $author[1;Kullanıcı uyarıldı!;$authorAvatar;https://discordapp.com/users/$authorID]
  $addField[1;Sebep;\`Link Engel\`]
  $addField[1;Yetkili;<@$clientID> - \`($clientID)\`]
  $addField[1;Kullanıcı;<@$authorID> - \`($authorID)\`]
  $color[1;BLACK]
  $deleteCommand
  $onlyIf[$checkContains[$channelID;944985537482219540]==false;]
  $onlyIf[$checkContains[$toLowercase[$message];https://;discord.gg/;discord.com/;gg/;http://;.glitch.me;.repl.co;.com;.xyz;.tk;dis.gd/]==true;]
  $onlyIf[$hasPerms[$guildID;$authorID;admin]==false;]
  $onlyIf[$hasRoles[$guildID;$authorID;940931380106379295]==false;]  `
  })

bot.leaveCommand({
channel:"948138071071805500",
code:`$ban[$authorID;$guildID;;Çıkış Ban Sistemi]
$onlyBotPerms[ban;Üzgünüm ama **Üyeleri Yasakla** iznim olmadığı için **$userTag ( $authorID )** adlı kullanıcıyı banlayamadım]`,
});

bot.joinCommand({ 
   channel:"954099561897525348", 
   code:` 
<@!$authorID>
$deleteIn[2s]
`})

bot.joinCommand({ 
   channel:"940990026987212850", 
   code:` 
<@!$authorID>
$deleteIn[2s]
`})

bot.joinCommand({ 
   channel:"941811289938882621", 
   code:` 
<@!$authorID>
$deleteIn[2s]
`})

bot.banAddCommand({
  channel:"954101145012428810",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;<@$authorID> Sunucudan yasaklandı.
  
Sebep: **$getBanReason[$authorID]**]
  $footer[1;ID: $authorID]
  $addTimestamp[1;$datesTamp]
  $thumbnail[1;$authorAvatar]
  $color[1;RANDOM]
  `
  })
bot.onBanAdd()

bot.banRemoveCommand({
  channel:"954101145012428810",
  code:`
  $author[1;$userTag;$authorAvatar]
  $description[1;<@$authorID> Yasağı kaldırıldı.]
  $footer[1;ID: $authorID]
  $addTimestamp[1;$datesTamp]
  $thumbnail[1;$authorAvatar]
  $color[1;RANDOM]
  `
  })
bot.onBanRemove() 

bot.joinCommand({
channel:"",
code:`$sendDM[https://api.popcat.xyz/welcomecard?background=https://cdn.discordapp.com/attachments/850808002545319957/859359637106065408/bg.png&text1=$uri[$usertag;encode]&text2=$uri[$serverName;encode]'e+Hoşgeldin&text3=%C3%9Cye+$membersCount&avatar=$replaceText[$authorAvatar;.webp;.png];$authorID]
$sendDM[<a:whitehearts:942004416037408799> Flora Development Sunucumuza Hoşgeldin <#954099561897525348> ve <#940990026987212850> Kanallarını Kontrol Etmeyi Unutma <a:whitehearts:942004416037408799>]`})

bot.command({
name: "banner",
code:`$description[1;<@$mentioned[1;yes]>] $image[1;$getUserBanner[$mentioned[1;yes]]] $footer[1;$userTag Tarafından İstendi]
  $color[1;BLACK]
  
  `
  })