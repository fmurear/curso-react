
const nombre =  'Francisco'
const apellido = 'Muñoz-Reja'

const nombreApellido = `Hola mundo ${nombre} ${apellido}`

function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto ${getSaludo(nombre)}`)