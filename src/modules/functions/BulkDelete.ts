import * as Discord from 'discord.js'
import AdminCheck from '../middleware/AdminCheck'

const BulkDelete = (msg: Discord.Message, tokens: string[]): void => {
  if (!AdminCheck(msg) || !tokens[1] || !parseInt(tokens[1])) return
  const embed = new Discord.MessageEmbed()
    .setDescription(`Cleaned up ${tokens[1]} messages`)
    .setColor('#ba0000')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  msg.channel.bulkDelete(parseInt(tokens[1]) + 1).then(() => {
    msg.channel
      .send({ embeds: [embed] })
      .then((msg) => setTimeout(() => msg.delete(), 3000))
  })
}

export default BulkDelete
