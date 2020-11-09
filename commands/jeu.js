function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

exports.run = async(client, message, args) => {
    message.delete()
    nbr = getRandomIntInclusive(1, 11)
    jeux = ["CS:GO","Rocket League","Fall Guys","Golf machin","Phasmophobia","Overwatch","Euro Truck","Cities Skyline","Minecraft","GTA V","Trackmania"]
    msg = jeux[nbr]
    message.channel.send(msg)
}