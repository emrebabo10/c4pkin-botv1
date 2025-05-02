const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
        return message.author.send("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    }

    const requiredRoleID = ''; /* Komutu kullanmasını istediğiniz yetkili rolün id'si */  

    if (!message.member.roles.cache.has(requiredRoleID)) {
        return message.channel.send("Bu komutu kullanmak için gerekli role sahip değilsiniz.");
    }

    const sunucubilgi = new Discord.MessageEmbed()
        .setColor("#000001")
        .setTitle("Sunucu Restart!")
        .setAuthor("c4pkin's Bot", "https://cdn.discordapp.com/attachments/1331925914270957580/1331930479527723008/c4pkinytarsiv.png?ex=6815442c&is=6813f2ac&hm=9a9a8751d10925588d6f688ca1feef19d79bf1dc261ce04121cb5cadc3ddada9&")
        .setImage("https://cdn.discordapp.com/attachments/1331925914270957580/1367806966403039294/restart.jpg?ex=6815ed01&is=68149b81&hm=505a11dc31ba57e4adc089d0cc62e93c4bb857a661989dc8592c8168a74926b8&")
    message.channel.send("||@everyone & @here||", { embed: sunucubilgi });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'restart',
    description: 'Sunucuya restart atılacağının bilğisini verir.',
    usage: 'restart'
};