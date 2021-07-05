exports.run = (client, message, args) => {
    let queue = client.player.getQueue(message);
    message.channel.send('Voici les prochains titres :\n' + queue.songs.map((song, id) =>
        `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
    ).slice(0, 10).join("\n"));
    message.delete();
}