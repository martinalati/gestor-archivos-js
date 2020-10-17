
//import {obtenerChiste} from './js/http-provider';
//import {init} from './js/chistes-pages';
import {obtenerUsuarios} from './js/http-provider';
import {init} from './js/usuarios-page';
//import * as CRUD from './js/crud-provider' // importar al objeto CRUD todas las propiedades
//import { init } from './js/archivos-page';
/* 
fetch(jokeUrl).then(resp => {
    console.log(resp);
    resp.json().then( ({id,value}) =>{
        console.log(id);
        console.log(value);
    }); //extraer el body en formato json
}); */

//para evitar el promise hell.. utilizamos la rta de una promesa como la llamada de otra
/* fetch(jokeUrl)
    .then(resp => resp.json())
    .then(({id,value}) => {
            console.log(id);
            console.log(value);}); */

//obtenerChiste().then(console.log);

//init();

obtenerUsuarios().then(console.log);
init();
/* 
CRUD.getUsuario(2).then(console.log);

CRUD.crearUsuario({
    name: 'Fernando',
    job:'Carpintero'
}).then(console.log);

CRUD.actualizarUsuario(1,{
    name: 'Melissa',
    job:'Developer'
}).then(console.log);

CRUD.actualizarUsuario(1,{
    name: 'Melissa',
    job:'Developer'
}).then(console.log)

CRUD.borrarUsuario(1).then(console.log); */

//init();