const util = require('util');
const sleep = util.promisify(setTimeout);
module.exports = {

    //asignamos tiempo de ejecución a los procesos
    
    async viaje2(){
        try {
            await sleep(2000);
            return "Viaje2 realizado";
        } catch (error) {
            console.log(error);
        }
    },

    async preparacion(){
        try {
            await sleep(7000);
            return "Preparacion finalizada";
        } catch (error) {
            console.log(error)
        }
    }

}