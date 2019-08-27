const { receta, viaje1 } = require('./tareaA');
const { viaje2, preparacion } = require('./tareaB');

async function main() {
    console.time('Tiempo total de ejecución')
    //hilo de ejecución en paralelo
    const results = await Promise.all([receta(), viaje1()]); 
    //un solo hilo de ejecución, de forma secuencial
    const valor1 = await viaje2(); 
    const valor2 = await preparacion();
    console.timeEnd('Tiempo total de ejecución')

    console.log(results[0]);
    console.log(results[1]);
    console.log(valor1);
    console.log(valor2);
 
}

main();