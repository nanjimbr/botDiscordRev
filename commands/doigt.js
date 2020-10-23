exports.run = async(client, message, args) => {
    var cul = './sounds/doigtCul.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(cul, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !doigt");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}