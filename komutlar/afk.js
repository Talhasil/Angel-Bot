module.exports = [{
  name: "afk",
  code: `
  $setUserVar[afksayı;0]
  $setUserVar[afksebep;$message;$authorID]
  $setUserVar[afk;yes;$authorID]
  $channelSendMessage[$channelID;$getServerVar[tick] <@$authorID>, Artık afk'sın]
  $onlyIf[$message!=;$getServerVar[cross] <@$authorID>, Afk sebebi girin.]
  $onlyIf[$getUserVar[afk;$authorID]==no;]
  `
  },{
    name:"$alwaysExecute",
    code:`
    $setUserVar[afksebep;;$authorID]
    $setUserVar[afk;no;$authorID]
    $channelSendMessage[$channelID;$getServerVar[tick] <@$authorID>, Artık afk değilsin.]
    $onlyIf[$getUserVar[afksayı;$authorID]==2;]
    $setUserVar[afksayı;$sum[$getUserVar[afksayı;$authorID];1];$authorID]
    $onlyIf[$getUserVar[afk;$authorID]==yes;]
    `
    },{
      name:"$alwaysExecute",
      code:`
      $author[1;Kullanıcı AFK;$userAvatar[$mentioned[1]];https://discordapp.com/users/$mentioned[1]]
      $addField[1;Kullanıcı;<@$mentioned[1]> - \`($mentioned[1])\`]
      $addField[1;Sebep;\`$getUserVar[afksebep;$mentioned[1]]\`]
      $color[1;BLACK]
      $onlyIf[$getUserVar[afk;$mentioned[1]]==yes;]
      $onlyIf[$mentioned[1;no]!=undefined;]
      `
      }]