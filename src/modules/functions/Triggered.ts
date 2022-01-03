import * as Discord from 'discord.js'

const FuckYou = (msg: Discord.Message): void => {
  if (
    msg.content.toLowerCase().includes('fuck ratssnap') ||
    msg.content.toLowerCase().includes('fuck you ratssnap') ||
    msg.content.toLowerCase().includes('i hate ratssnap') ||
    msg.content.toLowerCase().includes('i hate you ratssnap')
  )
    msg.reply('Fuck you too, bro.')
}

const LoveYou = (msg: Discord.Message): void => {
  if (
    msg.content.toLowerCase().includes('i love you ratssnap') ||
    msg.content.toLowerCase().includes('i love ratssnap') ||
    (msg.content.toLowerCase().includes('love') && msg.content.includes('ratssnap'))
  )
    msg.reply('I love you too!')
}

const NoYou = (msg: Discord.Message): void => {
  const tokens = msg.content.toLowerCase().split(' ')
  if (
    (tokens[0] === 'no' || tokens[0] === 'nô' || tokens[0] === 'nö') &&
    (tokens[1] === 'u' ||
      tokens[1] === 'you' ||
      tokens[1] === 'u,' ||
      tokens[1] === 'you,')
  )
    msg.channel.send('no u')
}

export { FuckYou, LoveYou, NoYou }
