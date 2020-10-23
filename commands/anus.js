exports.run = async(client, message, args) => {
    var anus = './sounds/anus.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(anus, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !anus");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}