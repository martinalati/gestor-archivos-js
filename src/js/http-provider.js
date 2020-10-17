const jokeUrl       = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios   = 'https://reqres.in/api/users?page=2';

//Cloudinary
const cloudPreset ='ml_default';
const cloudUrl='https://api.cloudinary.com/v1_1/martintesting/upload';

const obtenerChiste = async() => {
    //el async indica q la funcion devuelve una promesa
    try {
        const resp = await fetch(jokeUrl);
        if(!resp.ok) throw 'No se pudo realizar la peticion';
         const {icon_url, id, value} = await resp.json();
         return {icon_url, id, value};
    } catch (err){
 
            throw err;
    }
}

const obtenerUsuarios = async() => {

    const resp = await fetch(urlUsuarios);
    const {data: ususarios} = await resp.json();

    return ususarios;

}

//ArchivoSubri :: File
const subirImagen = async(archivoSubir) => {

    const formData = new FormData();
    formData.append('upload_preset',cloudPreset);
    formData.append('file',archivoSubir);

    try {
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if(resp.ok){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
            console.log(cloudResp);
        } else {
            throw await resp.json(); // si aca tengo un error lo atrapo y luego en el catch especifico que lo quiero manejar
        }
    } catch(err) {
        throw err;
    }

}
export  {
        obtenerChiste, 
        obtenerUsuarios,
        subirImagen
}