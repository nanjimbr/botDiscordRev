exports.run = async(client, message, args) => {
    var mort = './sounds/mort.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(mort, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !mort");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}