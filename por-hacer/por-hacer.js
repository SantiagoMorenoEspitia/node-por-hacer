const fs = require('fs');
const argv = require('yargs');
let listadoPorHcer = [];

const crear = (descripcion)=>{
    cargarDB()
    let porhacer={
        descripcion,
        completado:false
    };
    listadoPorHcer.push(porhacer);
    guardarDB()
    return porhacer;
}
const cargarDB = ()=>{
    try{
        listadoPorHcer = require('../db/data.json')
    }catch(error){
        listadoPorHcer = [];
    }
}

const guardarDB =()=>{
    let data = JSON.stringify(listadoPorHcer);
    fs.writeFile('db/data.json',data,(err)=>{
        if(err) throw new Error('No se pudo guardar',err)
    });
}
const borrar =(descripcionn)=>{
    cargarDB()
    console.log(descripcionn)
    let nuevoListado = listadoPorHcer.filter(tarea=>{
        return tarea.descripcion !== descripcionn
    });
    if(listadoPorHcer.length === nuevoListado.length){
        return false;
    }else{
        listadoPorHcer = nuevoListado;
        guardarDB()
        return true
    }
}

const getListado =()=>{
    cargarDB()
    return listadoPorHcer;
}
const actualizar=(descripcion,completado = true)=>{
    cargarDB();
    let index = listadoPorHcer.findIndex(tarea=>{
        return tarea.description === descripcion;
    }) 
    if(index>=0){
        listadoPorHcer[index].completado=completado;
        guardarDB()
        return true;
    }else{
        return false;
    }
}


module.exports={
    crear,
    getListado,
    actualizar,
    borrar
}