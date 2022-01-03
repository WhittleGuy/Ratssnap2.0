import axios from 'axios'
import * as Discord from 'discord.js'
import { TenorResult } from '../../@types/Tenor'

const TenorSearch = async (
  msg: Discord.Message,
  tokens: string[]
): Promise<void> => {
  let keywords = 'head pats'
  if (tokens.length > 1) keywords = tokens.slice(1, tokens.length).join(' ')
  const URL = `https://api.tenor.com/v1/search?q=${keywords}&key=35P3YFP3G2W6`
  await axios.get(URL).then((res) => {
    try {
      const images: TenorResult[] = res.data.results
      const embed = new Discord.MessageEmbed()
        .setImage(
          // eslint-disable-next-line
          // @ts-ignore
          images[Math.floor(Math.random() * images.length)].media[0].gif.url
        )
        .setColor('#ff9ed7')
        .setFooter({ text: 'Powered by Tenor' })
      msg.channel.send({ embeds: [embed] })
    } catch {
      const embed = new Discord.MessageEmbed()
        .setColor('#ff9ed7')
        .setDescription(
          'No results found for search: ' +
            tokens.slice(1, tokens.length).join(' ')
        )
        .setFooter({ text: 'Powered by Tenor' })
      msg.channel.send({ embeds: [embed] })
    }
  })
}

export default TenorSearch
