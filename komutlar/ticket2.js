module.exports = [{
  name:"kapat",
  aliases:["ticketkapat","ticket-kapat"],
  code:`
  $sendDM[**$serverName** adlı sunucumuzda açtığınız ticket \`$username\` tarafından kapatılmıştır.;$get[user]]
  $closeTicket[$channelID]
  $wait[7s]
  $let[user;$getChannelVar[tuser]]
  $setUserVar[tticket;$getChannelVar[tuser]]
  $getServerVar[tick] <@$authorID>, Ticket 7 saniye içinde kapatılıcak.
  $onlyIf[$isTicket[$channelID]==true;$getServerVar[cross] <@$authorID>, Bu kanal bir ticket değil.]
  $onlyForRoles[$getServerVar[admin];$getServerVar[cross] <@$authorID>, Bunu kullanamazsın.]
  `
  }]