module.exports = {
    description: 'Allows you to view information on the bot.',
    aliases: ['binfo', 'infobot', 'bottinfo'],
    usage: 'channelinfo <#chanel>'
}

module.exports.run = async(client, message, args) => {

    const info = new client.embed()
        .setTitle(`Information on ${client.user.username}`)
        .setThumbnail(client.user.displayAvatarURL())
        .addField('**ID:**', client.user.id)
        .addField('**Name:**', client.user.username)
        .addField('**Prefix:**', message.px)
        .addField('**Channels:**', client.channels.cache.size)
        .addField('**Creator**', 'MetaRP')
        .addField('')
        .setFooter('')
    message.channel.send(info)
}