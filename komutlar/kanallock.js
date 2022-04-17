module.exports = ({
name:"lock",
$if:"v4",
code:`
$color[1;RANDOM]
$thumbnail[1;$userAvatar]
$author[1;İşlem Tamamlandı]
$description[1;$getServerVar[tick] <@$authorID> Kanal Kilitlendi
Şu andan itibaren kimse kanala mesaj gönderemez]
$footer[1;$userTag Kullandı]
$addTimestamp[1;$dateStamp]
$modifyChannelPerms[$roleID[@everyone];$channelID;-sendmessage]
$deleteIn[15s]
$addCmdReactions[<:flora_tick:950474824462004224>]
$onlyPerms[admin;$getServerVar[cross] Üzgünüm Yetkin Yok]`})