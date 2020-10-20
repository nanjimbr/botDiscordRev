exports.run = async(client, message, args) => {
    var aziz = './sounds/aziz.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(aziz, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !aziz");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}