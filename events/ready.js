const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const config = require("../config.json");

var prefix = config.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );

  client.user.setStatus("online"); 

  var oyun = [
    "c4pkin Developments",
    "discord.gg/mtxF3yFCz5"
  ];

  let index = 0;
  setInterval(() => {
    if (index === oyun.length) index = 0;
    client.user.setActivity(oyun[index], { type: "LISTENING" }); 
    index++;
  }, 5000); 
};

