exports.run = async(client, message, args) => {
    var xavier = './sounds/xavier.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(xavier, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !xavier");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}