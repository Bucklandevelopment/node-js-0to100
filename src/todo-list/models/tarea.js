// const { v4: uudiv4 } = require('uuid');
const crypto = require('crypto');
const uuidv4 = crypto.randomUUID;

class Tarea {
    
    id = '';
    desc = '';
    completadoEn = null;

    constructor( desc ) {

        this.id = uuidv4();
        this.desc = desc;
        this.completadoEn = null;

    }

}



module.exports = Tarea;
