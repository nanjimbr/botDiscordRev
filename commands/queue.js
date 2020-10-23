exports.run = async(client, message, args) => {
    var queue = './sounds/queue.mp3';

    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(queue, { volume: 1})});
            message.delete();
            console.log(message.author.tag + " used !queue");
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
}