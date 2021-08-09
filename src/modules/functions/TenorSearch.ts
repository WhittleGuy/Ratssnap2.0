import axios from 'axios'
import * as Discord from 'discord.js'
import { TenorResult } from '../../@types/Tenor'

const TenorSearch = async (msg: Discord.Message, tokens: string[]): Promise<void> => {
    let keywords = 'head pats'
    if (tokens.length > 1) keywords = tokens.slice(1, tokens.length).join(' ')
    const URL = `https://api.tenor.com/v1/search?q=${keywords}&key=35P3YFP3G2W6`
    await axios.get(URL).then((res) => {       
        try{
            const images: TenorResult[] = res.data.results
            const embed = new Discord.MessageEmbed() 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
                .setImage(images[Math.floor(Math.random() * images.length)].media[0].gif.url)
                .setColor('0xff9ed7')
                .setFooter('Powered by Tenor')
            msg.channel.send(embed)
        }
        catch {
            const embed = new Discord.MessageEmbed() 
                .setColor('0xff9ed7')
                .setDescription(
                    'No results found for search: ' + tokens.slice(1, tokens.length).join(' ')
                )
                .setFooter('Powered by Tenor');
            msg.channel.send(embed);
        }
    })
}

export default TenorSearch