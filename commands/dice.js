function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

exports.run = (client, message, args) => {
    msg = args.join(" ")
    msg = parseInt(msg)
    ans = getRandomIntInclusive(1, msg)
    message.channel.send(ans)
}