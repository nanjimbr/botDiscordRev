exports.run = async(client, message, args) => {
    var papy = './sounds/papy.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(papy, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !papy");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}