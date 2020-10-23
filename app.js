
//const argv = require('yargs').argv;
const argv = require('./config/yargs.js').argv 
const porHacer = require('./por-hacer/por-hacer');
const colors =require('colors')


let comando = argv._[0];

switch(comando) {

    case 'crear':
        let tarea = porHacer.crear(argv.description)
        console.log(tarea)
        break;
    case 'listar':
        let listado = porHacer.getListado()
        for(let tarea of listado){
            console.log("===============Por Hacer===============".red)
            console.log('D',tarea.descripcion);
            console.log('Estado',tarea.completado)
            console.log("========================================".red)
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.actualizar(argv.descripcion,argv.completado)
        console.log("Actualiza las tareas a realizar")
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.description);
        break;
    default:
        console.log("Comando no reconocido")
        break;
}