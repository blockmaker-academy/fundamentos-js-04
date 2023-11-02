// Ejercicio 1: Acceso a Propiedades con Notación de Puntos y Corchetes

// Crea un objeto llamado person con propiedades como name, age y city. Luego, accede a estas propiedades utilizando tanto la notación de puntos como la notación de corchetes.
const jugador = {
    nombre: 'Fermín',
    edad: 19,
    club: 'FC Barcelona'
}

console.log(jugador.nombre)
// Acceso con notación de puntos
console.log(jugador['edad'])
// Acceso con notación de corchetes
console.log(jugador.nombre + ' es un jugador de ' + jugador['edad'] + ' años del ' + jugador.club)
