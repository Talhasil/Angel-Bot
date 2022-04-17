module.exports = [{
name: "spamengel-aç",
code: `
Spam-Engel sistemi başarıyla açılmıştır :white_check_mark:
Eğer kişi 5 saniye içerisinde 3ten fazla mesaj yazarsa otomatik olarak sunucudan **__atılacaktır.__**
*Sistemi kapatmak için **!spamengel-kapat** yazmanız yeterlidir*
$setServerVar[spams;açık;$guildID]

$onlyIf[$getServerVar[spams;$guildID]==kapalı;Sistem zaten açık :x:]
$onlyPerms[admin;Bu komudu kullanamk için gerekli yetkin bulunmuyor :x:]
`
},{
name: "spamengel-kapat",
code: `
Spam-Engel sistemi başarıyla kapatılmıştır :white_check_mark:
*Sistemi açmak için **!spamengel-aç** yazmanız yeterlidir*
$setServerVar[spams;kapalı;$guildID]

$onlyIf[$getServerVar[spams;$guildID]==açık;Sistem zaten kapalı :x:]
$onlyPerms[admin;Bu komudu kullanamk için gerekli yetkin bulunmuyor :x:]
`
},{
name: "$alwaysExecute",
code: `
$setUserVar[spam;-3;$authorID]
$wait[10s]
$setUserVar[spam;$sum[$getUserVar[spam;$authorID];+1];$authorID]
$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
$onlyIf[$getServerVar[spams;$guildID]!=kapalı;]
`
},              {
name:"$alwaysExecute",
$if:"v4",
code:`
$if[$getUserVar[spam;$authorID]>0]
Spam atmayı bırak **$getUserVar[spam;$authorID]/3**
$if[$getUserVar[spam;$authorID]>3]
**$userTag** spam atmayı bırakmadı ve sunucudan atıldı :white_check_mark:
$endif
$endif
$if[$getUserVar[spam;$authorID]==3]
$kick[$authorID]
$endif
$onlyIf[$hasPerms[$guildID;$authorID;admin]!=true;]
$onlyIf[$getServerVar[spams;$guildID]!=kapalı;]
`
}] 
