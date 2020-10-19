exports.run = async(client, message, args) => {
    var amongus = './sounds/amongus.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(amongus, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !emergency");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}