exports.run = async(client, message, args) => {
    var derange = './sounds/derange.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(derange, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !derange");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}