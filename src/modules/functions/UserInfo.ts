import * as Discord from 'discord.js'

export const UserInfo = (msg: Discord.Message): void => {
  const { guild } = msg
  const user = msg.mentions.users.first() || msg.member.user
  const member = guild.members.cache.get(user.id)
  const embed = new Discord.MessageEmbed()
    .setAuthor({
      name: user.tag,
      iconURL: user.displayAvatarURL(),
    })
    .setColor('#ffee8f')
    .setFooter({ text: `User ID: ${msg.member.id}` })
    .addFields(
      { name: 'Bot', value: user.bot ? 'Yes' : 'No', inline: true },
      { name: 'Nickname', value: member.nickname || 'None', inline: true },
      {
        name: 'Roles',
        value: member.roles.cache
          .map((role: Discord.Role) => role)
          .slice(0, -1)
          .join(' '),
        inline: true,
      },
      {
        name: 'Joined Server',
        value:
          new Date(member.joinedTimestamp).toLocaleDateString() +
          '\n' +
          new Date(member.joinedTimestamp).toLocaleTimeString(),
        inline: true,
      },
      {
        name: 'Joined Discord',
        value:
          new Date(user.createdTimestamp).toLocaleDateString() +
          '\n' +
          new Date(user.createdTimestamp).toLocaleTimeString(),
        inline: true,
      }
      //   { name: '', value: '' }
    )
  msg.channel.send({ embeds: [embed] })
}

export default UserInfo
