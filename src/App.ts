import * as Discord from 'discord.js'
//import * as Twitch from 'tmi.js'
import CommandHandler from './modules/middleware/CommandHandler'
import Revolver from './modules/classes/Revolver'

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

  DClient.login('Nzk4ODkzODQ2NDEwMjk3Mzk0.X_7p3w.TpvK2XadxcLNft921nv0JVDmI8s')
  DClient.on('ready', () => {
    console.log(`[+] Connected to Discord as ${DClient.user.tag}!`)
    DClient.user.setActivity('$commands')
  })

  DClient.on('message', (msg: Discord.Message) => {
    if (msg.author.bot) return
    if (msg.content.charAt(0) !== PREFIX) return
    msg.content = msg.content.substr(1)
    CommandHandler(msg, revolver)
  })
}

const App = (): void => {
  DiscordBot()
}

export default App
