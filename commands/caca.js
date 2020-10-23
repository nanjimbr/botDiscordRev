exports.run = async(client, message, args) => {
    var caca = './sounds/cac.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(caca, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !caca");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}