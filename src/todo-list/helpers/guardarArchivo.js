const fs = require('fs');
const path = require('path')
const archivo = path.resolve(__dirname,'../db/data.json');
console.log(archivo)

const guardarDB = ( data ) => {
    fs.writeFileSync( archivo, JSON.stringify(data) );
}

const leerDB = () => {
    
    if( !fs.existsSync(archivo) ){
        return null;
    }
    
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse( info );

    // console.log(data);

    return data;
}



module.exports = {
    guardarDB,
    leerDB
}