const Discord = require('discord.js');
const cooldowns = new Map();

exports.run = (client, message, args) => {
    const allowedChannelId = ''; /* !kayıt komutunun hangi kanalda kullanılacağı */

    if (message.channel.id !== allowedChannelId) {
        return message.channel.send("❌ Bu komut sadece belirli bir kanalda kullanılabilir.");
    }

    return message.channel.send("# 🔊 Kayıt bekleme ses odasına giriş yaparak yetkili ekibini bekleyiniz. \n<@&1367803361767718913>"); /* Sona yetkili rolün id'si */
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıt', 'kayit'],
  permLevel: "0"
};

exports.help = {
  name: "kayıt",
  description: "Kullanıcının kayıt bekleme kanalına yetkilileri çağırması için kullanılır.",
  usage: "kayıt"
};
