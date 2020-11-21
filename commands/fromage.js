exports.run = async(client, message, args) => {
    var fromage = './sounds/fromage.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(fromage, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !fromage");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}