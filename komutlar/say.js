module.exports = {
name:"say",
code:`
$author[1;Flora;$serverIcon]
$description[1;

\`•\` **Sunucumuzda Toplam** \`$membersCount\` **Kişi Bulunmakta**

\`•\` **Sunucumuzda Toplam** \`$math[$membersCount-$membersCount[$guildID;offline]]\` **Aktif Üye Bulunmakta**

\`•\` **Sunucumuza Toplam** \`$serverBoostCount\` **Takviye Yapılmış**]

$color[1;RANDOM]
$onlyPerms[admin;Buna Sadece Ownerlar Bakar Gülüm]
`
} 
