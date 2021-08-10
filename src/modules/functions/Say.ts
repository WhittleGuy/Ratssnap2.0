import * as Discord from 'discord.js'

const Say = (msg: Discord.Message): void => {
  msg.delete()
  if (!msg.content.includes('feet')) {
    msg.channel.send(msg.content.slice(3))
  }
}

export default Say
