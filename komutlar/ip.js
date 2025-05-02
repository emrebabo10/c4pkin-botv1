const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (client, message, params) => {
    const allowedChannelID = ""; /* !ip komutunun hangi kanalda kullanılacağı */

    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL())
            .addField('❌ Uyarı', 'Bu komut özel mesajlarda kullanılamaz!');
        
        try {
            await message.author.send({ embeds: [ozelmesajuyari] });
        } catch (error) {
            console.error("DM gönderilemedi:", error);
        }

        return;
    }

    if (message.channel.id !== allowedChannelID) {
        return message.channel.send("❌ Bu komut sadece belirli bir kanalda kullanılabilir.");
    }

    const sunucubilgi = new Discord.MessageEmbed()
        .setColor("#000001")
        .setTitle("FiveM Sunucu IP Bilgileri")
        .setAuthor("c4pkin's Bot", "https://cdn.discordapp.com/attachments/1331925914270957580/1331930479527723008/c4pkinytarsiv.png")
        .addField('FiveM IP :', 'connect localhost')
        .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy85THBZ_CQBKT0Bx6Y8jinZwBA-e3wkLLAg&s");
    message.channel.send({ embed: sunucubilgi });
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ip',
    description: 'Sunucu ip adresini gösterir.',
    usage: 'ip'
};
