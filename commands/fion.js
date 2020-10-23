exports.run = async(client, message, args) => {
    var fion = './sounds/fion.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(fion, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !fion");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}