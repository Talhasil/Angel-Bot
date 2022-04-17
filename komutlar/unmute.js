module.exports = [{
  name:"unmute",
  code:`
  $if[$mentioned[1;no]==undefined;{execute:untimeout1};{execute:untimeout2}]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Kullanıcı belirt.]
  $onlyForRoles[$getServerVar[mutehammer];$getServerVar[admin];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  },{
    name:"untimeout1",
    type:"awaited",
    code:`
    $author[1;Kullanıcının mutesi kaldırıldı!;$userAvatar[$mentioned[1]];https://discordapp.com/users/$message[1]]
    $addField[1;Kullanıcı;<@$message[1]> - \`($message[1])\`]
    $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
    $color[1;BLACK]
    $timeoutMember[$guildID;$message[1];0;no;Remove Timeout]
    $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$message[1]').isCommunicationDisabled()  ;yes]==true;$getServerVar[cross] <@$authorID>, Kullanıcı zaten mutelenmemiş.]
    $onlyIf[$memberExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Sunucumuzda böyle bir kullanıcı yok.]
    `
    },{
      name:"untimeout2",
      type:"awaited",
      code:`
      $author[1;Kullanıcının mutesi kaldırıldı!;$userAvatar[$mentioned[1]];https://discordapp.com/users/$mentioned[1]]
      $addField[1;Kullanıcı;<@$mentioned[1]> - \`($mentioned[1])\`]
      $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
      $color[1;BLACK]
      $timeoutMember[$guildID;$mentioned[1];0;no;Remove Timeout]
      $onlyIf[$djsEval[client.guilds.cache.get('$guildID').members.cache.get('$mentioned[1]').isCommunicationDisabled()  ;yes]==true;$getServerVar[cross] <@$authorID>, Kullanıcı zaten mutelenmemiş.]
      `
      }]