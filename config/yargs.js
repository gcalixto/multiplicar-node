const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en Consola la tabla de Multiplicar', opts)
    .command('crear', 'Genera un archivo con la tabla de Multiplicar', opts)
    // .help()
    .argv;

module.exports = {
    argv
}