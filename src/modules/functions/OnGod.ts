import * as Discord from 'discord.js'

const OnGod = (msg: Discord.Message): void => {
  const responses = [
    "On your fuckin' timbs, bruv?",
    'On god, mate?',
    'really gonna bring god into this, huh?',
    "swear on your yeezys, you won't",
    'oh for real? just like that?',
  ]
  msg.channel.send(`${responses[Math.floor(Math.random() * responses.length)]}`)
}

export default OnGod
