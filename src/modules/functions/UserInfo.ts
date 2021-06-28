import * as Discord from 'discord.js';

export const UserInfo = (msg: Discord.Message): void => {
    const { guild } = msg;
    const user = msg.mentions.users.first() || msg.member.user;
    const member = guild.members.cache.get(user.id);
    const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL())
      .setColor('0xffee8f')
      .setFooter('User ID: ' + msg.member.id)
      .addFields(
        { name: 'Bot', value: user.bot ? 'Yes' : 'No', inline: true },
        { name: 'Nickname', value: member.nickname || 'None', inline: true },
        {
          name: 'Roles',
          value: member.roles.cache
            .map((roles: Discord.Role) => `${roles}`)
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
        },
        {
          name: 'Last Message',
          value: user.lastMessage ? user.lastMessage.content : 'None',
        }
        //   { name: '', value: '' }
      );
    msg.channel.send(embed);
  }


export default UserInfo;