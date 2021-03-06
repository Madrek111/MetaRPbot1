const { parse } = require('date-and-time')

module.exports = {
    description: 'Set a users birthday.',
    aliases: [`setbday`],
    usage: 'setbirthday'
}

module.exports.run = async(client, message, args) => {
    const embed = new client.embed()
        .setFooter(`${message.guild.name} | Made By Fuel#2649`, message.guild.iconURL({ dynamic: true }))


    const user = message.mentions.users.first()
    const birthd = args.slice(1).join(' ').toLowerCase().charAt(0).toUpperCase() + args.slice(1).join(' ').slice(1).toLowerCase()
    const date = parse(birthd, 'MMM D YYYY')

    if (!user || !date.getDay()) return message.channel.send(embed.setDescription(`You need to mention a user and enter the date of that users birthday!\nExample: \`${message.px}setbirthday @user Sep 4 2004\``))

    const age = getAge(args.slice(1).join(' '))
    if (age <= 12) return message.channel.send(embed.setDescription(`You can\'t enter a year greater than ${new Date().getFullYear() - 12}!`))

    message.channel.send(embed
        .setTitle(`🥳 Successfully set their birthday! 🥳`)
        .setDescription(`I have set ${user}'s birthday to ${args.slice(1).join(' ')}!\n\nThey will be ${age + 1}`)
        .setTimestamp())

    client.members.ensure(message.guild.id, client.memberSettings, `${user.id}.birthday`)
    client.members.set(message.guild.id, args.slice(1).join(' '), `${user.id}.birthday`)
}

const getAge = b => {
    let age = new Date().getFullYear() - new Date(b).getFullYear()
    const m = new Date().getMonth() - new Date(b).getMonth()
    if (m < 0 || (m === 0 && new Date().getDate() < new Date(b).getDate()))
        age--;

    return age
}