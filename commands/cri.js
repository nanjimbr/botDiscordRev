exports.run = async(client, message, args) => {
    var cri = './sounds/Le_cri.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(cri, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !cri");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}