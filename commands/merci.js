exports.run = async(client, message, args) => {
    var merci = './sounds/merci.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(merci, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !merci");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}