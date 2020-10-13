exports.run = async(client, message, args) => {
    var allo = './sounds/startup-palmashow_Trim.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(allo, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !allo");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}