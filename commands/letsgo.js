exports.run = async(client, message, args) => {
    var letsgo = './sounds/letsgo.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(letsgo, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !letsgo");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}