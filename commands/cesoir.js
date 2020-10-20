exports.run = async(client, message, args) => {
    var cesoir = './sounds/kemarcesoir.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(cesoir, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !cesoir");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}