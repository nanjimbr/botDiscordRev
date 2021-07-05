exports.run = async(client, message, args) => {
    if(!message.member.voice.channel) return message.channel.send("Rejoins un channel vocal d'abord salfou");

        client.player.skip(message);
        message.delete();
    }