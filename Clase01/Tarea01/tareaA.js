const util = require('util');
const sleep = util.promisify(setTimeout); //convierte de callback a promesas
module.exports = {

    //generamos un tiempo de ejecución para los procesos

    async receta(){
        try {
            await sleep(1000);
            return "Lectura de Receta";
        } catch (error) {
            console.log(error);
        }
    },

    async viaje1(){
        try {
            await sleep(2000);
            return "Viaje1 realizado";
        } catch (error) {
            console.log(error)
        }
    }

}