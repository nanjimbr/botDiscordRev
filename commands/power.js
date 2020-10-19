exports.run = async(client, message, args) => {
    var power = './sounds/power.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(power, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !power");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}