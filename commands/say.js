
exports.run = async (client, message, args) => {
    var msg = args.join(" ");
    message.delete();
    message.channel.send(msg);
}