const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, params) => {

    if (!message.guild) {
        return message.author.send("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    }

    const requiredRoleID = '';  /* Komutu kullanmasını istediğiniz yetkili rolün id'si */ 

    if (!message.member.roles.cache.has(requiredRoleID)) {
        return message.channel.send("Bu komutu kullanmak için gerekli role sahip değilsiniz.");
    }

    const sunucubilgi = new Discord.MessageEmbed()
        .setColor("#000001")
        .setTitle("Sunucu Bakımda!")
        .setAuthor("c4pkin's Bot", "https://cdn.discordapp.com/attachments/1331925914270957580/1331930479527723008/c4pkinytarsiv.png?ex=6815442c&is=6813f2ac&hm=9a9a8751d10925588d6f688ca1feef19d79bf1dc261ce04121cb5cadc3ddada9&")
        .addField('Sunucu bakıma alınmıştır bakım bittiğinde duyuru yapılacaktır. Lütfen yetkilileri etiketlemeyelim.')
        .setImage("https://files.sikayetvar.com/complaint/2924/29243130/samsung-tv-uygulama-yuklenmeme-sorunsali-2_350x350.jpg") 
    message.channel.send("||@everyone & @here||", { embed: sunucubilgi });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'bakım',
    description: 'Sunucunun bakımda olduğunu bildirir.',
    usage: 'bakım'
};
