module.exports = {
  name:"unban",
  aliases:"ban-kaldır",
  code:`
  $unban[$message[1]]
  $author[1;Kullanıcının banı kaldırıldı!;$userAvatar[$message[1]];https://discordapp.com/users/$message[1]]
  $addField[1;Sebep;\`$getBanReason[$message[1]]\`]
  $addField[1;Yetkili;<@$authorID> - \`($authorID)\`]
  $addField[1;Kullanıcı;<@$message[1]> - \`($message[1])\`]
  $color[1;$getServerVar[hex]]
  $onlyIf[$isBanned[$message[1]]==true;$getServerVar[cross] <@$authorID>, Kullanıcı zaten banlanmamış.]
  $onlyIf[$userExists[$message[1]]==true;$getServerVar[cross] <@$authorID>, Böyle bir kullanıcı yok.]
  $onlyIf[$isNumber[$message[1]]==true;$getServerVar[cross] <@$authorID>, Kullanıcı ID'si gir.]
  $onlyForRoles[$getServerVar[banhammer];$getServerVar[admin];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
`
  }