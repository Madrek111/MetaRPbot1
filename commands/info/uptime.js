module.exports = {
    description: 'Check how long the bot has been up.',
    aliases: ['utime', 'binfo'],
    usage: 'uptime'
}

module.exports.run = async(client, message, args) =>
    message.channel.send(new client.embed()
        .setFooter(`${message.guild.name} `, message.guild.iconURL({ dynamic: true }))
        .addField('Uptime', require('humanize-duration')(client.uptime, { conjunction: " and ", serialComma: false, round: true })))