exports.run = async(client, message, args) => {
    var chokolad = './sounds/fart-08.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(chokolad, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !froute");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}