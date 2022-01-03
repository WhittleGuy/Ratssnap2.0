import * as Discord from 'discord.js'

const Commands = (msg: Discord.Message): void => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Ratssnap Commands')
    .setColor('#ff9ed7')
    .setFooter({ text: '* Admin only' })
    .addFields(
      {
        name: '$clean *',
        value: 'Bulk delete a specified number of messages.',
        inline: true,
      },
      { name: '$feet', value: '-', inline: true },
      {
        name: '$gif',
        value: 'Search for gifs using Tenor (defaults to head pats)',
        inline: true,
      },
      { name: '$onGod', value: 'On god?', inline: true },
      { name: '$pats', value: 'Returns a random head pat gif', inline: true },
      { name: '$pickles', value: 'Truly a gift to us all', inline: true },
      { name: '$ratssnap', value: 'I am here, unfortunately', inline: true },
      { name: '$ratgang', value: 'Summons the #RatGang', inline: true },
      { name: '$rules', value: "Display's the server rules", inline: true },
      {
        name: '$russian',
        value: 'Play a game of russian roulette',
        inline: true,
      },
      // {
      //   name: '$say',
      //   value: 'Make ratssnap say something for you',
      //   inline: true,
      // },
      {
        name: '$study',
        value: 'Display study timer status',
        inline: true,
      },
      {
        name: '$study toggle [minutes]',
        value:
          'Toggle the study timer and optionally change the interval (30 minutes by default)',
        inline: true,
      },
      {
        name: '$study add/remove <@user>',
        value: 'Add or remove users mentioned by the timer',
        inline: true,
      },
      {
        name: '$tone',
        value: 'Returns a list of tone indicators',
        inline: true,
      },
      {
        name: '$ui',
        value: 'Returns information about yourself or a tagged user',
        inline: true,
      }
    )

  msg.channel.send({ embeds: [embed] })
}

export default Commands
