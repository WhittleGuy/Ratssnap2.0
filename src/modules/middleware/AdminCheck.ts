import * as Discord from 'discord.js'
import { ADMINROLES } from '../global/Admin'

const AdminCheck = (msg: Discord.Message): boolean => {
  const {guild} = msg
  const user = msg.member.user
  const member = guild.members.cache.get(user.id)
  return member.roles.cache.some((role: Discord.Role) => {
    return ADMINROLES.includes(role.name)
  }) 
}
 
export default AdminCheck
