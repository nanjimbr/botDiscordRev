exports.run = async(client, message, args) => {
    var ludo = './sounds/Ludoo.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(ludo, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !ludo");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}