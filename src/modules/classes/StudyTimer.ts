import * as Discord from 'discord.js'

export default class StudyTimer {
  interval: number | null
  enabled: boolean
  users: Discord.User[] | null

  constructor() {
    this.interval = 30
    this.enabled = false
  }

  status(msg: Discord.Message, color = `#ff9ed7`): void {
    const user = msg.member.user

    const status = new Discord.MessageEmbed()
      .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
      .setTitle('Study Timer')
      .setColor(`#ff9ed7`)
      .addFields(
        {
          name: 'Status',
          value: `Study timer is now **${
            this.enabled ? 'ENABLED' : 'DISABLED'
          }**`,
        },
        {
          name: 'Interval',
          value: `${this.interval} minutes`,
        }
      )
    msg.channel.send({ embeds: [status] })
  }

  add(
    msg: Discord.Message,
    newUsers: Discord.Collection<Discord.Snowflake, Discord.User>
  ): void {
    const newList: string[] = []
    newUsers.forEach((user) => {
      const index = this.users.indexOf(user)
      if (index < 0) this.users.push(user)
      newList.push(user.toString())
    })
    const status = new Discord.MessageEmbed()
      .setAuthor({
        name: msg.author.tag,
        iconURL: msg.author.displayAvatarURL(),
      })
      .setTitle('Study Timer')
      .setColor('#ff9ed7')
      .setDescription(`${newList.join(', ')} added to timer`)
    msg.channel.send({ embeds: [status] })
  }

  remove(
    msg: Discord.Message,
    newUsers: Discord.Collection<Discord.Snowflake, Discord.User>
  ): void {
    const newList: string[] = []
    newUsers.forEach((user) => {
      const index = this.users.indexOf(user)
      if (index > -1) this.users.splice(index, 1)
      newList.push(user.toString())
    })
    const status = new Discord.MessageEmbed()
      .setAuthor({
        name: msg.author.tag,
        iconURL: msg.author.displayAvatarURL(),
      })
      .setTitle('Study Timer')
      .setColor('#ff9ed7')
      .setDescription(`${newList.join(', ')} removed from timer`)
    msg.channel.send({ embeds: [status] })
  }

  toggle(msg: Discord.Message, time = 30): void {
    this.enabled = !this.enabled
    if (this.enabled) {
      this.interval = time
      this.users = [msg.author]
    } else this.users = null
    this.status(msg, this.enabled ? '0x00d619' : '0xba0000')
  }
}
