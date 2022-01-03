import * as Discord from 'discord.js'

export default class Revolver {
  chamber: number[] | null
  sexyChance = 100

  constructor() {
    this.chamber = null
  }

  spin(msg: Discord.Message): void {
    const user = msg.member.user
    this.chamber = [0, 0, 0, 0, 0, 0]
    this.chamber[Math.floor(Math.random() * 6)] = 1
    const embed = new Discord.MessageEmbed()
      .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
      .setDescription('The revolver has been loaded and spun')
      .setColor('#ff9ed7')
    msg.channel.send({ embeds: [embed] })
    return
  }

  fire(msg: Discord.Message): void {
    const user = msg.member.user
    const TIMEOUT_LENGTH = 60
    //? Kill condition
    if (this.chamber[0] === 1) {
      msg.member
        .timeout(TIMEOUT_LENGTH * 1000, 'Ratssnap Roulette')
        .then(() => {
          console.log(`Timed out ${user.username} for ${TIMEOUT_LENGTH}`)
          const embed = new Discord.MessageEmbed()
            .setDescription(
              `Timed out ${user.username} for ${TIMEOUT_LENGTH} seconds`
            )
            .setFooter({ text: `Reason: Ratssnap Roulette` })
            .setColor('#ff9ed7')
            .setAuthor({
              name: `${user.tag}`,
              iconURL: user.displayAvatarURL(),
            })
          msg.guild.channels.cache
            .get('705912606178803803') // @ts-ignore
            .send({ embeds: [embed] })
        })
        .catch((err) => {
          console.error(`Error timing out ${user.username}`)
          const embed = new Discord.MessageEmbed()
            .setDescription(
              `Error timing out ${user.username} for ${TIMEOUT_LENGTH} seconds`
            )
            .setFooter({ text: `Reason: Ratssnap Roulette [${err}]` })
            .setColor('#ff0000')
            .setAuthor({
              name: `${user.tag}`,
              iconURL: user.displayAvatarURL(),
            })
          msg.guild.channels.cache
            .get('705912606178803803') // @ts-ignore
            .send({ embeds: [embed] })
        })
      // this.chamber.shift();
      // Reset revolver after loss
      this.chamber = [0, 0, 0, 0, 0, 0]
      this.chamber[Math.floor(Math.random() * 6)] = 1
      const embed = new Discord.MessageEmbed()
        .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
        .setDescription('BANG!')
        .setColor('#ba0000')
      msg.channel.send({ embeds: [embed] })
      return
    }

    //? Survival Condition
    if (this.chamber[0] === 0) {
      this.chamber.shift()
      const luck = Math.floor(Math.random() * this.sexyChance + 1)
      if (luck === this.sexyChance) {
        const embed = new Discord.MessageEmbed()
          .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
          .setDescription(
            'You are incredibly hot and sexy and everybody wants you.'
          )
          .setColor('#ff9ed7')
        msg.channel.send({ embeds: [embed] })
      } else {
        const embed = new Discord.MessageEmbed()
          .setAuthor({ name: user.tag, iconURL: user.displayAvatarURL() })
          .setDescription('You have survived Russian roulette.')
          .setColor('#00d619')
        msg.channel.send({ embeds: [embed] })
      }

      return
    }
  }
}
