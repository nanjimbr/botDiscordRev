const { DiscordAPIError, Client, MessageEmbed } = require("discord.js")

exports.run = (client, message, args) => {
    const exampleEmbed = new MessageEmbed()
    .setTitle("À l'aide !")
    .setDescription("Voici la liste des commandes du bot, et leurs utilisations.")
    .setColor('#47ff00')
    .addFields(
        {name: "__!help__", value: "Affiche ce message d'aide."},
        {name: "__Sons__", value: "**!aladdin**, ** !allo**, **!anus**, **!aziz**, **!bite**, **!caca**, **!cesoir**, **!cri**, **!doigt**, **!emergency**, **!enorme**, **!fart**, **!fion**, **!golmont**, **!gueule**, **!letsgo**, **!ludo**, **!nu**, **!power**, **!queue**, **!rouge**"},
        {name: "__General__", value: "**!avatar**, **!del**, **!img**, **!say**"}
    )
    message.channel.send(exampleEmbed);
    console.log(message.author.tag + " used !help");
    
}