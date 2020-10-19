exports.run = async(client, message, args) => {
    var golmon = './sounds/golmon.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(golmon, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !golmon");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}