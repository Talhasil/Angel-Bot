module.exports = ({
name: "profil",
aliases:"kullanıcı-bilgi",
code:
`
$color[1;RANDOM]
$thumbnail[1;$userAvatar[$mentioned[1;yes]]]
$author[1;Bilgileriniz;$userAvatar[$mentioned[1;yes]]]
$description[1;
**Kullanıcı İsmi**
\`$username[$mentioned[1;yes]]\`

**Kullanıcı Etiketi**
\`#$discriminator[$mentioned[1;yes]]\`

**Hesap Tarihi**
\`$creationDate[$mentioned[1;yes];date]\`

**Sunucudaki Rolleri**
$userRoles[$mentioned[1;yes];$guildID;mention;,]]
` 
} )