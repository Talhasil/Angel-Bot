module.exports = [{
  name:"timeout",
  aliases:["mute","zaman-aşımı","zamanaşımı","sustur"],
  code:`
  $if[$mentioned[1;no]==undefined;{execute:timeout1};{execute:timeout2}]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Kullanıcı belirt.]
  $onlyForRoles[$getServerVar[mutehammer];$getServerVar[banhammer];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  },{
    name:"timeout1",
    type:"awaited",
    code:`
    $author[1;Kullanıcı mutelendi!;$userAvatar[$message[1]];https://discordapp.com/users/$message[1]]
    $addField[1;Sebep;$replaceText[\`$messageSlice[3]\`;\`\`;\`Sebep belirtilmedi.\`]]
    $addField[1;Süre;\`$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s; Saniye];m; Dakika];h; Saat];d; Gün]\`]
    $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
    $addField[1;Kullanıcı;<@$message[1]> - \`($message[1])\`]
    $color[1;BLACK]
    $timeoutMember[$guildID;$message[1];$message[2];no;$messageSlice[2]]
    $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$message[2];s;];m;];h;];d;]]==true;$getServerVar[cross] <@$authorID>, Süre belirt.]
    $onlyIf[$checkContains[$message[2];s;m;h;d]==true;$getServerVar[cross] <@$authorID>, Süre belirt.]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolümden üstte/eşit birini muteleyemem.]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini muteleyemem.]
    $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$message[1]').isCommunicationDisabled()  ;yes]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten mutelenmiş.]
    $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucuda böyle bir kullanıcı yok.]
    `
    },{
    name:"timeout2",
    type:"awaited",
    code:`
    $author[1;Kullanıcı mutelendi!;$userAvatar[$mentioned[1]];https://discordapp.com/users/$mentioned[1]]
    $addField[1;Sebep;$replaceText[\`$replaceText[$noMentionMessage;$noMentionMessage[1];]\`;\`\`;\`Sebep belirtilmedi.\`]]
    $addField[1;Süre;\`$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s; Saniye];m; Dakika];h; Saat];d; Gün]\`]
    $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
    $addField[1;Kullanıcı;<@$mentioned[1]> - \`($mentioned[1])\`]
    $color[1;BLACK]
    $timeoutMember[$guildID;$mentioned[1];$noMentionMessage[1];no;$replaceText[$noMentionMessage;$noMentionMessage[1];]]
    $onlyIf[$isNumber[$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage[1];s;];m;];h;];d;]]==true;$getServerVar[cross] <@$authorID>, Süre belirt.]
    $onlyIf[$checkContains[$noMentionMessage[1];s;m;h;d]==true;$getServerVar[cross] <@$authorID>, Süre belirt.]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, Rolümden üstte/eşit birini muteleyemem.]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini muteleyemem.]
    $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$mentioned[1]').isCommunicationDisabled()  ;yes]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten mutelenmiş.]
    `
    }]