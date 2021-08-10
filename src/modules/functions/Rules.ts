import * as Discord from 'discord.js'

const Rules = (msg: Discord.Message): void => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Pro Gamer Zone Rules')
    .setColor('0xff9ed7')
    .addFields([
      {
        name: 'Speech',
        value: `- No marginalizing language (racism, homophobia, sexism, transphobia, body shaming, etc).\n- No harassment.`,
      },
      {
        name: 'Behavior',
        value: `- No spam.\n- Keep the channels for what they're for, so no chatting in the  #👩│pics channel for example.\n- If you're going to promote, please do so under the promotion channel. There is a content creator role designated for users who stream, please react to that message in #📌│roles.`,
      },
      {
        name: 'Privacy',
        value: `- Please do not share personal information in the server. This is for your personal safety! If you would like to discuss personal or private matters with someone, please do so in dms. Any information shared that may dox someone will be immediately deleted.\n- There are too many wonderful people in the server for Cat to message personally. Feel free to interact with her in the discord server anytime, but please do not send Cat DMs.`,
      },
      {
        name: 'Moderation',
        value: `- Respect the staff (@certified gamers - admin & @mods), don't argue against them. `,
      },
      {
        name: 'Conflict',
        value:
          '- If you have a problem with somebody you deal with it in private, or tag/DM admins if you think it affects the server.',
      },
    ])
  msg.channel.send(embed)
}

export default Rules
