exports.run = async(client, message, args) => {
    var pain = './sounds/pain.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(pain, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !pain");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}