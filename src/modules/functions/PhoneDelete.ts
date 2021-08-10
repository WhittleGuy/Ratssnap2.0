import * as Discord from 'discord.js'
import { PHONE_REGEX } from '../global/RegEx'

const PhoneDeletion = (msg: Discord.Message): void => {
  if (PHONE_REGEX.test(msg.content)) {
    msg.delete()
    console.log('[-] Message Deleted')
    console.log(msg.author.tag + ': ' + msg.content)
  }
}

export default PhoneDeletion
