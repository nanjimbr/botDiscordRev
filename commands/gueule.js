exports.run = async(client, message, args) => {
    var gueule = './sounds/gueule.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(gueule, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !gueule");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}