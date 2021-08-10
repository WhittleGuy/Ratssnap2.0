import * as Discord from 'discord.js'

const Feet = (msg: Discord.Message): void => {
  const responses = [
    'feet are GROSS STOP IT',
    'feet are GROSS STOP IT',
    'feet are GROSS STOP IT',
    "shut up feet aren't ALLOWED",
    "shut up feet aren't ALLOWED",
    "shut up feet aren't ALLOWED",
    'Toes are tasty change my mind',
    "sure baby, I'll send you my feet pics soon",
  ]
  msg.channel.send(responses[Math.floor(Math.random() * responses.length)])
}

export default Feet
