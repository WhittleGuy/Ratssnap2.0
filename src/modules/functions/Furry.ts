import * as Discord from 'discord.js'

const Furry = (msg: Discord.Message): void => {
  const responses = [
    `${msg.member.user.username} is *definitely* a furry`,
    'Catssnap is indeed a furry',
    'Catssnap is a furry',
    'Cat do be furrin',
    'Despite her statements on the contrary, I can confirm Cat is indeed a furry',
    `Rawr x3 nuzzles how are you pounces on you you're so warm o3o notices you have a bulge o: someone's happy ;) nuzzles your necky wecky~ murr~ hehehe rubbies your bulgy wolgy you're so big :oooo rubbies more on your bulgy wolgy it doesn't stop growing ·///· kisses you and lickies your necky daddy likies (; nuzzles wuzzles I hope daddy really likes $: wiggles butt and squirms I want to see your big daddy meat~ wiggles butt I have a little itch o3o wags tail can you please get my itch~ puts paws on your chest nyea~ its a seven inch itch rubs your chest can you help me pwease squirms pwetty pwease sad face I need to be punished runs paws down your chest and bites lip like I need to be punished really good~ paws on your bulge as I lick my lips I'm getting thirsty. I can go for some milk unbuttons your pants as my eyes glow you smell so musky :v licks shaft mmmm~`,
  ]
  const embed = new Discord.MessageEmbed()
    .setAuthor({
      name: msg.member.user.tag,
      iconURL: msg.member.user.displayAvatarURL(),
    })
    .setDescription(
      `${responses[Math.floor(Math.random() * responses.length)]}`
    )
  msg.channel.send({ embeds: [embed] })
}

export default Furry
