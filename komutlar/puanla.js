module.exports = {
  name:"puan",
  $if:"v4",
  code:`
  $if[$message[1]==ver]
  $getServerVar[tick] <@$authorID>, **$userTag[$mentioned[1]]** adlı üyeye \`$noMentionMessage[2]\` puan verdiniz.
  $setUserVar[staffpuan;$sum[$getUserVar[staffpuan;$mentioned[1]];$noMentionMessage[2]];$mentioned[1]]
  $cooldown[30m;$getServerVar[cross] <@$authorID>,Bu komutu 30 dakikada bir kullanabilirsin.]
  $onlyIf[$noMentionMessage[1]<11;$getServerVar[cross] <@$authorID>, En fazla 10 puan verebilirsiniz.]
  $onlyIf[$isNumber[$noMentionMessage[1]]!=;$getServerVar[cross] <@$authorID>, Puanını gir.]
  $onlyIf[$noMentionMessage[1]!=;$getServerVar[cross] <@$authorID>, Puanını gir.]
  $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[staff]]==false;$getServerVar[cross] <@$authorID>, Yetkililer birbirini puanlayamaz.]
  $onlyIf[$hasRoles[$guildID;$mentioned[1];$getServerVar[staff]]==true;$getServerVar[cross] <@$authorID>, Puanlamak istediğin kişi yetkili değil.]
  $onlyIf[$mentioned[1;no]!=undefined;$getServerVar[cross] <@$authorID>, Puanlamak istediğin kişiyi etiketle.]
  $endif
  $if[$message[1]==sayı]
  $getServerVar[tick] <@$authorID>, **$userTag[$mentioned[1]]** adlı üyenin \`$getUserVar[staffpuan;$mentioned[1]]\` yetkili puanı var.
  $onlyIf[$hasRoles[$guildID;$authorID;$getServerVar[staff]]==true;$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
   $endif
  $onlyIf[$checkContains[$message[1];ver;sayı]==true;$getServerVar[cross] <@$authorID>, **ver** , **sayı** seçeneklerini kullanın.]
  `
  }