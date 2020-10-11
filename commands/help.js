const { DiscordAPIError, Client } = require("discord.js")

exports.run = (client, message, args) => {
    const embed = {
        "embeds": [
          {
            "title": "À l'aide !",
            "description": "Voici la liste des commandes du bot, et leurs utilisations.",
            "color": 4718336,
            "fields": [
              {
                "name": "__!help__",
                "value": "Affiche ce message d'aide."
              },
              {
                "name": "__!fart__",
                "value": "Ne fonctionne que quand tu es dans un channel vocal, fais faire un pet au bot."
              },
              {
                "name": "__!avatar__ *@utilisateur*",
                "value": "Affiche ta photo de profil, ou d'un *utilisateur* mentionné."
              },
              {
                "name": "__!img__ *mot-clé de recherche*",
                "value": "Affiche une image en rapport avec les mots-clés de ta recherche."
              },
              {
                "name": "__!say__ *message*",
                "value": "Fais dire un message anonymement, par le bot."
              }
            ]
          }
        ]
      }

      message.channel.send({embed: embed});
}