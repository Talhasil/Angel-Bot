module.exports = {
  name:"vip",
  $if:"v4",
  code:`
$if[$message[1]==ver]
$addCmdReactions[<:flora_tick:950474824462004224>]
$giveRole[$guildID;$mentioned[1];$getServerVar[vip]]
$onlyIf[$mentioned[1;no]!=undefined;$getServerVar[cross] <@$authorID>, Kime vip vermeliyim?]
$endif
$if[$message[1]==al]
$addCmdReactions[<:tokyo_tick:933357259092820048>]
$takeRole[$guildID;$mentioned[1];$getServerVar[vip]]
$onlyIf[$mentioned[1;no]!=undefined;$getServerVar[cross] <@$authorID>, Kimden vip almalıyım?]
$endif
$onlyIf[$checkContains[$toLowercase[$message[1]];ver;al]==true;$getServerVar[cross] **ver** , **al** fonksiyonlarını kullanın.]
$onlyPerms[admin;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]  
  `
  }