function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

exports.run = async(client, message, args) => {
    msg = args.join(" ")
    msg = parseInt(msg)
    nbr = getRandomIntInclusive(0, msg)
    message.channel.send(nbr)
}