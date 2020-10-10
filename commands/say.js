
exports.run = async (client, message, args) => {
    var msg = args.join(" ");
    message.delete();
    message.channel.send(msg);
    console.log(message.author.tag + " used !say and said : " + msg);
}