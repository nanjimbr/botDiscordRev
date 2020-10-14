exports.run = (client, message, args) => {
    message.channel.send('Les coordonnées du spawn (__Overworld__) sont : *-45, 200*')
    message.channel.send('Les coordonnées du spawn (__Nether__) sont : *-13, 110, 10*')
    message.delete();
}