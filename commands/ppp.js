  
let rps = ["**:pencil: papier**", "**:moyai: pierre**", "**:scissors: ciseaux**"];
function random() { return `${rps[Math.floor(Math.random() * Math.floor(2))]}!` }
exports.run = (client, msg, args) => {
    let choice = args.join(" ").toLowerCase();
    if (choice === '') return msg.reply("Dites \"pierre\", \"papier\" ou \"ciseaux\".");
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") return msg.reply(`${choice} n'est pas un des choix :)`);
    msg.reply(random());
}