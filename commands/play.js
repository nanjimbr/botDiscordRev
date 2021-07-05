exports.run = async(client, message, args) => {
    if(!message.member.voice.channel) return message.channel.send("Rejoins un channel vocal d'abord salfou");
    let search = args.join(" ");
    if(!search) return message.channel.send('Précise ta recherche wsh');
    client.player.play(message, search)
    message.delete();
}