import * as Discord from 'discord.js'
import Revolver from '../classes/Revolver'
import {
  BulkDelete,
  Commands,
  Feet,
  OnGod,
  PhoneDeletion,
  Pickles,
  Rules,
  Say,
  TenorSearch,
  UserInfo,
} from '../functions'
import { FuckYou, LoveYou, NoYou } from '../functions/Triggered'
import AdminCheck from './AdminCheck'

const CommandHandler = (msg: Discord.Message, revolver: Revolver): void => {
  // Immediately check for a phone number and delete message if present
  PhoneDeletion(msg)

  // Top switch for functions that return a simple answer
  const tokens = msg.content.toLowerCase().split(' ')
  switch (tokens[0]) {
    case 'ratgang':
      msg.channel.send(
        `<:RatGangWhittle:824829679705522212> <:RatGangAric:825584630991159296> <:RatGangCat:822751481681412117> <:RatGangJulio:823021835469848627> <:RatGangKloud:825591024893820928> <:RatGangDedos:842960877312540702> <:RatGangCcat:843985893021974533> <:RatGangMouse:874106167423561770> <:RatGangClaire:825498502813450251>`
      )
      break

    case 'ratssnap':
      msg.channel.send('I am here, unfortunately.')
      break

    case 'clean':
      BulkDelete(msg, tokens)
      break
    case 'clear':
      BulkDelete(msg, tokens)
      break
    case 'delete':
      BulkDelete(msg, tokens)
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

    case 'russian':
      if (
        revolver.chamber === null ||
        (tokens[1] === 'spin' && AdminCheck(msg))
      ) {
        revolver.spin(msg)
      } else revolver.fire(msg)

    default:
      FuckYou(msg)
      LoveYou(msg)
      NoYou(msg, tokens)
      break
  }
}

export default CommandHandler
