module.exports = {
  name:"tavsiye",
  code:`
  $channelSendMessage[$getServerVar[tavsiyelog];{newEmbed:{author:Yeni bir tavsiye iletildi!:$authorAvatar}{field:Tavsiye veren:<@$authorID> - \`($authorID)\`}{field:Tavsiye kategorisi:$message[1]}{field:Verdiği tavsiye:$messageSlice[1]}{color:010307}{thumbnail:$authorAvatar}{reactions:<:flora_tick:950474824462004224>,<:flora_cross:950475138778943588>}}]
  $addCmdReactions[<:flora_tick:950474824462004224>]
  $onlyIf[$messageSlice[1]!=;$getServerVar[cross] <@$authorID>, Tavsiyenizi belirtin.]
  $onlyIf[$checkContains[$toLowercase[$message[1]];bdfd;aoijs;djs;html;sunucu;d.js;aoi.js]==true;$getServerVar[cross] <@$authorID>, Tavsiye kategorisi belirtin. \`Örnek: .tavsiye $randomText[bdfd;aoijs;djs;html] < tavsiyeniz >\`]
  $onlyIf[$message[1]!=;$getServerVar[cross] <@$authorID>, Tavsiye kategorisini belirtin. \`Örnek: .tavsiye $randomText[bdfd;aoijs;djs;html;sunucu] < tavsiyeniz >\`]
   

  `
  }