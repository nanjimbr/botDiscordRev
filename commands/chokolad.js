exports.run = async(client, message, args) => {
    var chokolad = './sounds/chokolad.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(chokolad, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !chokolad");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}