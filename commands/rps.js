exports.run = (client, message, args) => {
    
    const check = (args) => {
        if(args == 'rock' || args == 'paper' ||args == 'scissors' ||
            args == 'r' ||args == 'p' ||args == 's' ) 
            return true;
        return false;
    }

    let convert = (args) => {
        let num
        if(args == 'rock' || args == 'r') num = 1 ;
        if(args == 'paper' || args == 'p') num = 2 ;
        if(args == 'scissors' || args == 's') num = 3 ;
        return num;
    }

    const win = (weapon) => {
        message.reply(`${weapon} \nNoice! You win ;3`);
    }

    const lose = (weapon) => {
        message.reply(`${weapon} \nToo bad! You lose >:(`)
    }
    
    const draw = (weapon) => {
        message.reply(`${weapon} \nDraw! Try again :)`)
    }

    if(!check(args)) message.reply(`Enter 'rock'/ 'paper'/ 'scissors' or 'r'/ 'p'/ 's', not ${args} `)
    else
    {
        let point = convert(args);
        let weapon
        let choice = Math.ceil(Math.random() * 3); 
        if(choice == 1) weapon = 'Rock';
        if(choice == 2) weapon = 'Paper';
        if(choice == 3) weapon = 'Scissors';

        if(point == choice) 
            draw(weapon);
        else if((point == 1 && choice == 2) ||
                (point == 2 && choice == 3) ||
                (point == 3 && choice == 1)) 
                    lose(weapon);
        else if((point == 1 && choice == 3) ||
                (point == 2 && choice == 1) ||
                (point == 3 && choice == 2)) 
                    win(weapon);            
    }

}


exports.help = {
    name: "rps",
    aliases:[]
}
