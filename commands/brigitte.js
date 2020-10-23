exports.run = async(client, message, args) => {
    var brigitte = './sounds/brigitte.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(brigitte, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !brigitte");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}