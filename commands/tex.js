exports.run = async(client, message, args) => {
    var tex = './sounds/tex.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(tex, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !tex");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}