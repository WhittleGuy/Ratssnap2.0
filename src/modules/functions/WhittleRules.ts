import * as Discord from 'discord.js'

const Whittle = (msg: Discord.Message): void => {
  const embed = new Discord.MessageEmbed()
    .setTitle("Whittle's Rules")
    .setColor('#ff9ed7')
    .addFields([
      {
        name: 'Speech',
        value: `- Zero tolerance for homophobic, transphobic, racist, or marginalizing language.\n- Zero tolerance for jokes pertaining to traumatic experiences.`,
      },
      {
        name: 'Behavior',
        value: `- Zero tolerance for harassment.\n- No spam.\n- Keep content in channels on topic.\n- Use bots only in the designated channels.\n- Self promotion is to be kept in the promo channel. Linking to other Discord servers is never permitted.`,
      },
      {
        name: 'Privacy',
        value: `- Zero tolerance for doxing.`,
      },
      {
        name: 'Moderation',
        value: `- Moderators may act within their discretion. Arguing with or blocking them is likely to result in a ban.\n- Usernames must be English only and SFW.`,
      },
      {
        name: 'Conflict',
        value:
          '- If you have a problem with somebody you deal with it in private, or tag/DM mods/admins if you think it affects the server.',
      },
    ])
  msg.channel.send({ embeds: [embed] })
}

export default Whittle
