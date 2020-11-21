exports.run = async(client, message, args) => {
    var scorpion = './sounds/scorpion.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(scorpion, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !scorpion");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}