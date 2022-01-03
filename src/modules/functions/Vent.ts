import * as Discord from 'discord.js'

const Vent = (msg: Discord.Message): void => {
  if (msg.channel.id === 'inactive') {
    const timeout = setTimeout(() => {
      msg.delete()
    }, 5000)
  }
}

export default Vent
