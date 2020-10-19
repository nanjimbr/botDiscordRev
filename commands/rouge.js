exports.run = async(client, message, args) => {
    var rouge = './sounds/rouge-live.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(rouge, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !rouge");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}