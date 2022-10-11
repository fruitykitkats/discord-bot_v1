// Copyright (c) 2017 FruityKitKats. All rights reserved.

module.exports.run = async (bot, message, args) => { 
        message.channel.send({embed:{ 
            title:'Ping!',
            description:'Pong!',
            color: 0x5DADE2   
        }}) 
    }

module.exports.config = { 
    command: 'ping'
};
