exports.run = async(client, message, args) => {
    var enorme = './sounds/oui-lola.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(enorme, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !aladdin");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}