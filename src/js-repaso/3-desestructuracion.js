

const albañil = {
    nombre: 'Jess',
    apellido: 'Perez',
    poder: 'programacion',
    // edad: 50,
    getNombre() {
        return `${ this.nombre } ${ this.apellido } ${ this.poder }`
    }
}

// const nombre   = albañil.nombre;
// const apellido = albañil.apellido;
// const poder    = albañil.poder;

function imprimeAlbañil({ nombre, apellido, poder, edad = 0 }) {
    nombre = 'Jess';
    console.log(nombre, apellido, poder, edad );
}

// imprimeAlbañil( albañil );

const albañiles = ['jess', 'joe', 'jack'];

// const h1 = albañiles[0];
// const h2 = albañiles[1];
// const h3 = albañiles[2];
const [ , , h3 ] = albañiles;


console.log( h3 );






