exports.run = async (client, message, args) => {
    var farts = [
        './sounds/fart-01.mp3',
        './sounds/fart-02.mp3',
        './sounds/fart-03.mp3',
        './sounds/fart-04.mp3',
        './sounds/fart-05.mp3',
        './sounds/fart-06.mp3',
        './sounds/fart-07.mp3'
    ];
    
    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play(farts[Math.floor(Math.random()*farts.length)], { volume: 1})});
            message.delete();
    } else {
        message.reply('Tu n\'es pas dans un channel vocal :/');
        message.delete();
    }
};
