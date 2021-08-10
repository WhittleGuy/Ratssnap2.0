import * as Discord from 'discord.js'

const Report = (msg: Discord.Message): void => {
  if (msg.channel.id === '874364340235542539') {
    msg.delete()
    msg.channel
      .send('Thank you for your message. I have sent it to the mods.')
      .then((msg) => msg.delete({ timeout: 1500 }))
    const user = msg.mentions.users.first() || msg.member.user

    const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL())
      .setColor('0xffee8f')
      .setFooter('User ID: ' + msg.member.id)
      .setTitle('Mod Mail')
      .setColor('0xff9ed7')
      .addFields({ name: 'Message', value: msg.content, inline: false })

    // eslint-disable-next-line
    // @ts-ignore
    msg.guild.channels.cache.get('874364110295412776').send(embed)
  }
}

export default Report
