import * as Discord from 'discord.js'
import AdminCheck from '../middleware/AdminCheck'

const Say = (msg: Discord.Message): void => {
  msg.delete()
  if (!msg.content.includes('feet') || !AdminCheck(msg)) {
    msg.channel.send(msg.content.slice(3))
  }
}

export default Say
