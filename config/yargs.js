
const description ={
    demand:true,
    alias:'d',
    desc:"Descripsion del comando"
}
const completado = {
    defoult:true,
    alias:'c',
    desc:"Marca como completado o pendiente la tarea"
}

const argv = require('yargs')
.command('crear',"xxxxxxx",{
   description
})
.command('actualizar','Actualizar  el estado de una tarea',{
description,
completado,
})
.command('borrar',"Borrar una tarea",{
    description
})
.help()
.argv;

module.exports = {
    argv
}