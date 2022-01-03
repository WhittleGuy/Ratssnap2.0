import * as Discord from 'discord.js'
//import * as Twitch from 'tmi.js'
import CommandHandler from './modules/middleware/CommandHandler'
import Revolver from './modules/classes/Revolver'
import StudyTimer from './modules/classes/StudyTimer'
import { Report, Vent } from './modules/functions'
import { FuckYou, LoveYou, NoYou } from './modules/functions/Triggered'

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

const DClient = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
})
//const TClient = new Twitch.Client(TWITCH_OPTIONS)

const revolver = new Revolver()
const timer = new StudyTimer()
let timerSet = false
let interval: NodeJS.Timeout

const DiscordBot = () => {
  const PREFIX = '$'

  DClient.login('lmao i think not')
  DClient.on('ready', () => {
    console.log(`[+] Connected to Discord as ${DClient.user.tag}!`)
    DClient.user.setActivity('$commands')
  })

  DClient.on('messageCreate', (msg: Discord.Message) => {
    if (msg.author.bot) return
    Vent(msg)
    //Report(msg)
    FuckYou(msg)
    LoveYou(msg)
    NoYou(msg)
    if (msg.content.charAt(0) !== PREFIX) return
    msg.content = msg.content.substr(1)
    CommandHandler(msg, revolver, timer)

    if (timer.enabled) {
      if (!timerSet) {
        timerSet = true
        const embed = new Discord.MessageEmbed()
          .setTitle('Study Timer')
          .setColor('#ff9ed7')
          .setDescription('Time to take a break!')

        interval = setInterval(() => {
          // eslint-disable-next-line
          // @ts-ignore
          DClient.channels.cache
            .get('883478942865035334')
            // eslint-disable-next-line
            // @ts-ignore
            .send(timer.users.toString(), embed)
        }, 1000 * 60 * timer.interval)
      }
    } else {
      timerSet = false
      clearInterval(interval)
    }
  })
}

const App = (): void => {
  DiscordBot()
}

export default App
