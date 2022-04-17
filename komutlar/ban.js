module.exports = [{
    name: "ban",
    aliases: "yasakla",
    code: `
    $if[$mentioned[1;no]==undefined;{execute:ban1};{execute:ban2}]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Kullanıcı belirt.]
  $onlyForRoles[$getServerVar[banhammer];$getServerVar[admin];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  },{
    name: "ban1",
    type: "awaited",
    code: `
    $if[$memberExists[$message[1]]==true;{execute:ban3};{execute:ban4}]
    $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
    $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
    `
    },{
      name: "ban2",
      type: "awaited",
      code: `
      $author[1;Kullanıcı banlandı!;$userAvatar[$mentioned[1]];https://discordapp.com/users/]
      $addField[1;Sebep;$replaceText[\`$noMentionMessage\`;\`\`;\`Sebep belirtilmedi.\`]]
      $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
      $addField[1;Kullanıcı;<@$mentioned[1]> - \`($mentioned[1])\`]
      $color[1;BLACK]
      $ban[$mentioned[1];$guildID;0;$noMentionMessage[1]]
      $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini banlayamazsın.]
      $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$mentioned[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini banlayamazsın.]
      `
      },{
        name: "ban3",
        type: "awaited",
        code: `
        $author[1;Kullanıcı banlandı!;$userAvatar[$message[1]]]
        $addField[1;Sebep;$replaceText[\`$messageSlice[1]\`;\`\`;\`Sebep belirtilmedi.\`]]
        $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
        $addField[1;Kullanıcı;<@$message[1]> - \`($message[1])\`]
        $color[1;BLACK]
        $ban[$message[1];$guildID;0;$messageSlice[1]]
        $onlyIf[$rolePosition[$highestRole[$clientID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolümden üstte/eşit birini banlayamam.]
        $onlyIf[$rolePosition[$highestRole[$authorID]]<=$rolePosition[$highestRole[$message[1]]];$getServerVar[cross] <@$authorID>, Rolünden üstte/eşit birini banlayamazsın.]
        $onlyIf[$isBanned[$message[1]]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten banlanmış.]
        `
        },{
          name: "ban4",
          type: "awaited",
          code: `
          $author[1;Kullanıcı banlandı!;$userAvatar[$message[1]]]
          $addField[1;Sebep;$replaceText[\`$messageSlice[1]\`;\`\`;\`Sebep belirtilmedi.\`]]
          $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
          $addField[1;Kullanıcı;<@$message[1]> - \`($message[1])\`]
          $color[1;BLACK]
          $ban[$message[1];$guildID;0;$messageSlice[1]]
          $onlyIf[$isBanned[$message[1]]==false;$getServerVar[cross] <@$authorID>, Kullanıcı zaten banlanmış.]
          `
        }]