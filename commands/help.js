const { DiscordAPIError, Client, MessageEmbed } = require("discord.js")
const fs = require('fs');
let cmds = [];
fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`../commands/${file}`);
        let commandName = file.split(".")[0];
        cmds.push(commandName);
    });
});

exports.run = (client, message, args) => {
    const exampleEmbed = new MessageEmbed()
    .setTitle("À l'aide !")
    .setDescription("Voici la liste des commandes du bot, et leurs utilisations.")
    .setColor('#47ff00')
    .addFields(
        {name: "__!help__", value: "Affiche ce message d'aide."},
        {name: "__Sons__", value: cmds},
        {name: "__General__", value: "**!avatar**, **!del**, **!img**, **!say**"}
    )
    message.channel.send(exampleEmbed);
    console.log(message.author.tag + " used !help");
}