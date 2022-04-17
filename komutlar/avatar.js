module.exports = [{
  name:"avatar",
  aliases:["av","pp"],
  code:`
  $description[1;[Avatar Linki!]($userAvatar[$mentioned[1]])]
  $image[1;$userAvatar[$mentioned[1]]]
  $color[1;BLACK]
  $footer[1;$userTag tarafından istendi!]
  `
  }]