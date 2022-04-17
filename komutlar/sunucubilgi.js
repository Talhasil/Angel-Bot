module.exports = {
name:"sunucu-bilgi",
aliases:["sb","sunucu"],
  code:`
$thumbnail[1;$serverIcon]
$color[1;RANDOM]
$author[1;$servername Bilgileri;$serverIcon]
$description[1;
**Üye Sayısı**
\`$membersCount\`

**Kanal Sayısı**
\`$channelCount\`

**Sunucu ID** 
\`$guildID\`

**Sunucu Sahibi**
<@$ownerID>

**Rol Sayısı**
\`$roleCount\`

**Roller**
$guildRoles
`} 