import {subirImagen} from './http-provider';
const body = document.body;
let inputFile, imgFoto;

const crearInputFileHtml = () => {

    const html = `
    
    <h1 class="mt-5">Subir archivos</h1>
    <hr>

    <laberl>Selecciona una fotografía: </label>
    <input type="file" "/>

    <br>
    <img id="foto" class="img-thumbnail src="">
    `;
    //accept="image/png, image/jpeg
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#foto');
}

/* onst crearListarFilesHtml = () => {

    const html = `
    
    <h1 class="mt-5">Listar archivos</h1>
    <hr>

    <laberl>Listado de archivos: </label>
    
    <br>
    `;
    const div = document.createElement('div');
    div.innerHTML = html;
    body.append(div);

} */

const eventos = () => {

    inputFile.addEventListener('change', (event) => {
        //console.log(event);
        const file = event.target.files[0];
        //console.log(file);
        subirImagen(file).then( url => imgFoto.src = url);
    });

}
export const init = () =>{
    crearInputFileHtml();
   // crearListarFilesHtml();
    eventos();
}
