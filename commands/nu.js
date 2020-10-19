exports.run = async(client, message, args) => {
    var nu = './sounds/nu.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(nu, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !nu");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}