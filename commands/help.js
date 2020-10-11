const { DiscordAPIError, Client, MessageEmbed } = require("discord.js")

exports.run = (client, message, args) => {
    const exampleEmbed = new MessageEmbed()
    .setTitle("À l'aide !")
    .setDescription("Voici la liste des commandes du bot, et leurs utilisations.")
    .setColor('#47ff00')
    .addFields(
        {name: "__!help__", value: "Affiche ce message d'aide."},
        {name: "__!fart__", value: "Ne fonctionne que quand tu es dans un channel vocal, fais faire un pet au bot."},
        {name: "__!avatar__ *@utilisateur*", value: "Ne fonctionne que quand tu es dans un channel vocal, fais faire un pet au bot."},
        {name: "__!img__ *mot-clé de recherche*", value: "Affiche ta photo de profil ou celle de l'*utilisateur* mentionné."},
        {name: "__!say__ *message*", value: "Fais dire un message anonymement, par le bot."}
    )
    message.channel.send(exampleEmbed);
    console.log(message.author.tag + " used !help");
    
}