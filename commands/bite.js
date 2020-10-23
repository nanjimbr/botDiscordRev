exports.run = async(client, message, args) => {
    var bite = './sounds/bite.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(bite, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !bite");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}