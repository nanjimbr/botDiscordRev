exports.run = (client, message, args) => {
    var nbr = message.content.split(' ')
    nbr = nbr.pop()
    if(nbr > 100){
        message.reply('Tu dois entrer un nombre égal ou inférieur à 100 !')
    } else {
        message.channel.bulkDelete(nbr+1)
        console.log(message.author.tag+" deleted "+nbr+" messages.")
    }
}