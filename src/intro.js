
/// Seccion 1
// DONT FEAR THE PROCESS
console.log(process)

/// Seccion 2

const saludar = ( nombre ) => {
    return `Saludos ${ nombre }`; // 'Saludos ' + nombre;
}

console.log( saludar( 'Fernando' ) );



/// Seccion 3
console.log('Inicio de programa'); // 1

setTimeout( () => {
    console.log('Primer Timeout'); // 5
}, 3000 );


setTimeout( () => {
    console.log('Segundo Timeout'); // 2
}, 0 );


setTimeout( () => {
    console.log('Tercer Timeout'); // 3
    console.log(' I REPEAT SCROLL AND LOOK UP and // DONT FEAR THE PROCESS'); // 4 :: 3
}, 0 );


console.log('Fin de programa'); // 4 :: 2

console.log('LOOK UP and // DONT FEAR THE PROCESS'); // 4 :: 3