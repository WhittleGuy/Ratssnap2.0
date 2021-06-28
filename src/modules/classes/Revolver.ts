import * as Discord from 'discord.js'



export default class Revolver {
    chamber: number[] | null
    sexyChance = 100
    

    constructor() {
        this.chamber = null
    }
 
     spin(msg: Discord.Message):void {
    const user = msg.member.user;
    this.chamber = [0, 0, 0, 0, 0, 0];
    this.chamber[Math.floor(Math.random() * 6)] = 1;
    const embed = new Discord.MessageEmbed()
      .setAuthor(user.tag, user.displayAvatarURL())
      .setDescription('The revolver has been loaded and spun')
      .setColor('0xff9ed7');
    msg.channel.send(embed);
    return;
  }

  fire(msg: Discord.Message):void {
    const user = msg.member.user;
    //? Kill condition
    if (this.chamber[0] === 1) {
      this.chamber.shift();
      // Reset revolver after loss
      this.chamber = [0, 0, 0, 0, 0, 0];
      this.chamber[Math.floor(Math.random() * 6)] = 1;
      const embed = new Discord.MessageEmbed()
        .setAuthor(user.tag, user.displayAvatarURL())
        .setDescription('BANG!')
        .setColor('0xba0000');
      msg.channel.send(embed);
      return;
    }

    //? Survival Condition
    if (this.chamber[0] === 0) {
      this.chamber.shift();
      const luck = Math.floor(Math.random() * this.sexyChance + 1)
      if ( luck === this.sexyChance) {
        const embed = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.displayAvatarURL())
          .setDescription('You are incredibly hot and sexy and everybody wants you.')
          .setColor('0xff9ed7');
        msg.channel.send(embed);
      }
      else {
        const embed = new Discord.MessageEmbed()
          .setAuthor(user.tag, user.displayAvatarURL())
          .setDescription('You have survived Russian roulette.')
          .setColor('0x00d619');
        msg.channel.send(embed);
      }
     
      return;
    }
  }
}