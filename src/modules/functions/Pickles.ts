import * as Discord from 'discord.js'

const Pickles = (msg: Discord.Message): void => {
  const responses = [
    "Pickles are god's gift to humanity",
    "Pickles are god's gift to humanity",
    "Pickles are god's gift to humanity",
    "Pickles are god's gift to humanity",
    "pickles fuckin' slap",
    "pickles fuckin' slap",
    "pickles fuckin' slap",
    "pickles fuckin' slap",
    'Fuck you Kloud',
  ]
  msg.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`)
}

export default Pickles
