exports.run = async (client, message, args) => {
    var farts = [
        './sounds/fart-O1.mp3',
        './sounds/fart-O2.mp3',
        './sounds/fart-O3.mp3',
        './sounds/fart-O4.mp3',
        './sounds/fart-O5.mp3',
        './sounds/fart-O6.mp3',
        './sounds/fart-O7.mp3'
    ];
    
    if(message.member.voice.channel) {
        message.member.voice.channel.join().then(connection => { connection.play('./sounds/fart-O2.mp3', { volume: 1})});
            message.delete();
    } else {
        message.reply('You need to join a voice channel first!');
    }
};
