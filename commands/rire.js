exports.run = async(client, message, args) => {
    var rire = './sounds/rire.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(rire, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !rire");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}