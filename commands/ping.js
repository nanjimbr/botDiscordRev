exports.run = (client, message, args) => {
    message.reply("Pong !")
    message.delete();
    console.log(message.author.tag+" used !ping")
}