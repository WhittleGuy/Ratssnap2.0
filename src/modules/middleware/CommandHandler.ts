import * as Discord from 'discord.js'
import Revolver from '../classes/Revolver'
import StudyTimer from '../classes/StudyTimer'
import {
  BulkDelete,
  Commands,
  Feet,
  Furry,
  OnGod,
  PhoneDeletion,
  Pickles,
  Rules,
  Say,
  TenorSearch,
  Tone,
  UserInfo,
} from '../functions'
import { FuckYou, LoveYou, NoYou } from '../functions/Triggered'
import Whittle from '../functions/WhittleRules'
import AdminCheck from './AdminCheck'

const CommandHandler = (
  msg: Discord.Message,
  revolver: Revolver,
  timer: StudyTimer
): void => {
  // Immediately check for a phone number and delete message if present
  PhoneDeletion(msg)

  // Top switch for functions that return a simple answer
  const tokens = msg.content.toLowerCase().split(' ')
  switch (tokens[0].toLowerCase()) {
    case 'ratgang':
      msg.channel.send(
        `<:RatGangWhittle:887203782927200256> <:RatGangAric:887203783237582888> <:RatGangCat:887203783258570762> <:RatGangJulio:887203784260988948> <:RatGangKloud:887203782423883807> <:RatGangDedos:887203780448370739> <:RatGangCcat:887203783963181087> <:RatGangMouse:887203783380205638> <:RatGangClaire:887203782633615391>`
      )
      break

    case 'ratssnap':
      msg.channel.send('I am here, unfortunately.')
      break

    case 'clean':
    case 'clear':
    case 'delete':
      BulkDelete(msg, tokens)
      break

    case 'furry':
      Furry(msg)
      break

    case 'gif':
      TenorSearch(msg, tokens)
      break

    case 'commands':
      Commands(msg)
      break

    case 'rules':
      Rules(msg)
      break

    case 'ui':
      UserInfo(msg)
      break

    case 'feet':
      Feet(msg)
      break

    case 'ongod':
      OnGod(msg)
      break

    case 'pickles':
      Pickles(msg)
      break

    case 'say':
      Say(msg)
      break

    case 'tone':
      Tone(msg)
      break

    case 'russian':
      if (
        revolver.chamber === null ||
        (tokens[1] === 'spin' && AdminCheck(msg))
      ) {
        revolver.spin(msg)
      } else revolver.fire(msg)
      break

    case 'study':
      if (msg.channel.id === '883478942865035334') {
        if (!tokens[1]) {
          timer.status(msg)
        } else if (tokens[1] === 'toggle') {
          if (tokens[2] && parseInt(tokens[2])) {
            timer.toggle(msg, parseInt(tokens[2]))
          } else {
            timer.toggle(msg)
          }
          break
        } else if (tokens[1] === 'add') {
          try {
            timer.add(msg, msg.mentions.users)
          } catch (err) {
            console.log(err)
            break
          }
          break
        } else if (tokens[1] === 'remove') {
          try {
            timer.remove(msg, msg.mentions.users)
          } catch (err) {
            console.log(err)
            break
          }
          break
        } else {
          msg.channel.send('Invalid command.')
          break
        }
      }

      break

    case 'whittle':
      Whittle(msg)
      break

    default:
      FuckYou(msg)
      LoveYou(msg)
      NoYou(msg)
      break
  }
}

export default CommandHandler
