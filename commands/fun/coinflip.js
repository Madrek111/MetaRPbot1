module.exports = {
    description: 'Cant decide? Flip a coin.',
    aliases: ['cf'],
    usage: 'coinflip'
}

module.exports.run = async(client, message) => message.channel.send(new client.embed().setDescription(`Coin flipped by ${message.author.username} and it landed on **${Math.random() > 0.5 ? 'Heads' : 'Tails'}**.`).setFooter(`${message.guild.name} `, message.guild.iconURL({ dynamic: true })))