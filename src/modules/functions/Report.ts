import * as Discord from 'discord.js'

const Report = (msg: Discord.Message): void => {
  if (msg.channel.id === '874364340235542539') {
    msg.delete()
    msg.channel
      .send('Thank you for your message. I have sent it to the mods.')
      .then((msg) => setTimeout(() => msg.delete(), 1500))
    const user = msg.mentions.users.first() || msg.member.user

    const embed = new Discord.MessageEmbed()
      .setAuthor({
        name: user.tag,
        iconURL: user.displayAvatarURL(),
      })
      .setColor('#ffee8f')
      .setFooter({ text: 'User ID: ' + msg.member.id })
      .setTitle('Mod Mail')
      .setColor('#ff9ed7')
      .addFields({ name: 'Message', value: msg.content, inline: false })

    // eslint-disable-next-line
    // @ts-ignore
    msg.guild.channels.cache.get('874364110295412776').send(embed)
  }
}

export default Report
