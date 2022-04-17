module.exports = {
  name:"abone",
  aliases:"a",
  $if:"v4",
  code:`
  $if[$message[1]==ver]
  $setUserVar[subsayı;$sum[$getUserVar[subsayı;$authorID];1];$authorID]
  $addCmdReactions[<:flora_tick:950474824462004224>]
  $giveRole[$guildID;$mentioned[1];$getServerVar[subrol]]
  $onlyIf[$hasRoles[$guildID;$mentioned[1];$getServerVar[subrol]]==false;$getServerVar[cross] <@$authorID>, Üyede zaten abone rolü var.]
  $endif
  $if[$message[1]==al]
  $addCmdReactions[<:flora_tick:950474824462004224>]
  $takeRole[$guildID;$mentioned[1];$getServerVar[subrol]]
  $onlyIf[$hasRoles[$guildID;$mentioned[1];$getServerVar[subrol]]==true;$getServerVar[cross] <@$authorID>, Üyede zaten abone rolü yok.]
  $endif
  $if[$message[1]==sayı]
  $getServerVar[tick] <@$authorID>, **$userTag[$mentioned[1]]** adlı üyenin \`$getUserVar[subsayı;$mentioned[1]]\` abone sayısı var.
  $endif
  $onlyIf[$mentioned[1;no]!=undefined;$getServerVar[cross] <@$authorID>, Üyeyi etiketleyin.]
  $onlyIf[$checkContains[$toLowercase[$message[1]];ver;al;sayı]==true;$getServerVar[cross] <@$authorID>, **ver** , **al** argumanlarını kullanın.]
  $onlyForRoles[$getServerVar[subhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
   `
  }
