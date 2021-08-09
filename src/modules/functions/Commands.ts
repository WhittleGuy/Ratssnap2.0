import * as Discord from 'discord.js'

const Commands = (msg: Discord.Message): void => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Ratssnap Commands')
    .setColor('0xff9ed7')
    .addFields(
      {
        name: '$clean',
        value: 'Bulk delete a specified number of messages. Admin only.',
        inline: true,
      },
      {name: '$feet', value: '-', inline: true},
      {
        name: '$gif',
        value: 'Search for gifs using Tenor (defaults to head pats)',
        inline: true,
      },
      {name: '$onGod', value: 'On god?', inline: true},
      {name: '$pats', value: 'Returns a random head pat gif', inline: true},
      {name: '$pickles', value: 'Truly a gift to us all', inline: true},
      {name: '$pog', value: '-', inline: true},
      {name: '$ratssnap', value: 'I am here, unfortunately', inline: true},
      {name: '$ratgang', value: 'Summons the #RatGang', inline: true},
      {
        name: '$russian',
        value: 'Play a game of russian roulette',
        inline: true,
      },
      {
        name: '$userinfo or $ui',
        value: 'Returns information about yourself or a tagged user',
        inline: true,
      },
      {name: '$zonks', value: 'increasing zonks', inline: true}
    )

  msg.channel.send(embed)
}

export default Commands
