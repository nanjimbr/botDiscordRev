exports.run = (client, message, args) => {
    let queue = client.player.getQueue(message);
    if(!queue.songs){
        message.channel.send("y'a po de titres dans la liste là");
        message.delete();
    } else {
        message.channel.send('Voici les prochains titres :\n' + queue.songs.map((song, id) =>
        `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
    ).slice(0, 10).join("\n"));
    message.delete();
}
    }
    