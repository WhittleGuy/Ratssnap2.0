import * as Discord from 'discord.js'
import AdminCheck from '../middleware/AdminCheck'

const Tone = (msg: Discord.Message): void => {
  const embed = new Discord.MessageEmbed()
    .setTitle('Tone Indicators')
    .setColor('0xff9ed7')
    .addFields(
        {name: '/j', value: 'joking', inline: true},
        {name: '/hj', value: 'half-joking', inline: true},
        {name: '/s', value: 'sarcastic', inline: true},
        {name: '/gen or /g', value: 'genuine', inline: true},
        {name: '/srs', value: 'serious', inline: true},
        {name: '/nsrs', value: 'not serious', inline: true},
        {name: '/pos or /pc', value: 'positive connotation', inline: true},
        {name: '/neu', value: 'neutral connotation', inline: true},
        {name: '/neg or /nc', value: 'negative connotation', inline: true},
        {name: '/p', value: 'platonic', inline: true},
        {name: '/r', value: 'romantic', inline: true},
        {name: '/c', value: 'copypasta', inline: true},
        {name: '/l or /ly', value: 'lyrics', inline: true},
        {name: '/lh', value: 'light-hearted', inline: true},
        {name: '/nm', value: 'not mad', inline: true},
        {name: '/lu', value: 'a little upset', inline: true},
        {name: '/nbh', value: 'for when you are vagueposting or venting, but it is directed at nobody here', inline: true},
        {name: '/nsb', value: 'not subtweeting', inline: true},
        {name: '/sx or /x', value: 'sexual intent', inline: true},
        {name: '/nsx or /nx', value: 'non-sexual intent', inline: true},
        {name: '/rh or /rt', value: 'rhetorical question', inline: true},
        {name: '/t', value: 'teasing', inline: true},
        {name: '/ij', value: 'inside joke', inline: true},
        {name: '/m', value: 'metaphorically', inline: true},
        {name: '/li', value: 'literally', inline: true},
        {name: '/hyp', value: 'hyperbole', inline: true},
        {name: '/f', value: 'fake', inline: true},
        {name: '/th', value: 'threat', inline: true},
        {name: '/cb', value: 'clickbait', inline: true},        
    )
    .setFooter('https://toneindicators.carrd.co/#')
     
  msg.channel.send(embed)
}

export default Tone