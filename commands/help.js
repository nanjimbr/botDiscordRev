const { DiscordAPIError, Client, MessageEmbed } = require("discord.js")
const fs = require('fs');
let cmds = ["test","test2"];
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
    console.log(cmds);





    /* const exampleEmbed = new MessageEmbed()
    .setTitle("À l'aide !")
    .setDescription("Voici la liste des commandes du bot, et leurs utilisations.")
    .setColor('#47ff00')
    .addFields(
        {name: "__!help__", value: "Affiche ce message d'aide."},
        {name: "__Sons__", value: "**!aladdin**, **!allo**, **!anus**, **!aziz**, **!bite**, **!brigitte**, **!caca**, **!cesoir**, **!cri**, **!doigt**, **!emergency**, **!enorme**, **!fart**, **!fion**, **!golmont**, **!gueule**, **!letsgo**, **!ludo**, **!mort**, **!nu**, **!pain**, **!papy**, **!power**, **!queue**, **!rouge**, **!xavier**"},
        {name: "__General__", value: "**!avatar**, **!del**, **!img**, **!say**"}
    )
    message.channel.send(exampleEmbed);
    console.log(message.author.tag + " used !help"); */
}