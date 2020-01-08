const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        console.log('======================='.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('======================='.green);

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${base * i}\n`;
        }

        console.log(data.green);


    });

}

// otra forma de exporta la funcio es
// module.exports.crearArcvhivo = (base) => {
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${base * i}\n`;
        }

        // con el paquete writeFile se puede guardar archivos en la carpeta local
        // con \n se pueden hacer saltos de linea

        fs.writeFile(`tablas/tabla-${ base }-limite-${ limite }.txt`, data, (err) => {

            if (err)
                reject(err)
            else
                resolve(`tabla-${ base }-limite-${ limite }.txt`);

        });

    });
}


// una forma de exportar esta funcion es:
module.exports = {
    crearArchivo,
    listarTabla
}