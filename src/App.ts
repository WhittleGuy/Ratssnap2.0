import * as Discord from 'discord.js'
//import * as Twitch from 'tmi.js'
import CommandHandler from './modules/middleware/CommandHandler'
import Revolver from './modules/classes/Revolver'
import { Report } from './modules/functions'

// const TWITCH_OPTIONS = {
//   options: {debug: true},
//   connection: {
//     reconnect: true,
//     secure: true,
//   },
//   identity: {
//     username: process.env.BOTUSERNAME,
//     password: process.env.TWITCHTOKEN,
//   },
//   channels: [process.env.TARGETCHANNEL],
// }

const DClient = new Discord.Client()
//const TClient = new Twitch.Client(TWITCH_OPTIONS)

const revolver = new Revolver

const DiscordBot = () => {
  const PREFIX = '$'

  DClient.login('bitchyouthought')
  DClient.on('ready', () => {
    console.log(`[+] Connected to Discord as ${DClient.user.tag}!`)
    DClient.user.setActivity('$commands')
  })

  DClient.on('message', (msg: Discord.Message) => {
    if (msg.author.bot) return
    Report(msg)
    if (msg.content.charAt(0) !== PREFIX) return
    msg.content = msg.content.substr(1)
    CommandHandler(msg, revolver)
  })
}

const App = (): void => {
  DiscordBot()
}

export default App
