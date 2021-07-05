const Discord = require('discord.js');
const config = require("./jsonFiles/config.json");
const Enmap = require("enmap");
const client = new Discord.Client();
const fs = require('fs');

const distube = require('distube');

const player = new distube(client, {leaveOnEmpty: true, leaveOnFinish: true});

player.on('initQueue', queue => {
  queue.autoplay = false;
})

player.on('playSong', (message, queue, song) => {
    let exampleEmbed = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setTitle(song.name)
    .setAuthor(message.author.username+"#"+message.author.discriminator)
    .addFields(
      { name: 'Durée :', value: song.formattedDuration })
    .setImage(song.thumbnail)
    .setTimestamp()
    .setFooter('message Nanji#1337');
    //message.channel.send(`🎵 *__${song.name}__* passe à la radio! \n ${song.url}`);
    message.channel.send(exampleEmbed);
})

client.player = player;

client.config = config;

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./events/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
    });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Commande ${commandName} chargée.`);
    client.commands.set(commandName, props);
  });
});

client.login(config.token);


