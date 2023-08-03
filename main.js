// Bienvenida
alert("Bienvenido al cuestionario dinamico! \nTe hare 10 preguntas de programacion")

let puntaje = 0;

// Pregunta 1
const pregunta1 = prompt("Pregunta 1: HTML es un lenguaje de programacion. Contesta con v si es verdadera o con f si es falsa")

if (pregunta1 === "f" || pregunta1 === "F") {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

// Pregunta 2
const pregunta2 = confirm("Pregunta 2: CSS, ¿Significa hojas de estilo en cascada? presiona ACEPTAR si es correcto o CANCELAR si es incorrecto ")

if (pregunta2 === true) {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

// Pregunta 3
const pregunta3 = Number(prompt("Pregunta 3: ¿Cual de los siguientes no es un lenguaje de programacion?\nSeleccione un numero de esta lista \n\n1. JavaScript \n2. C\n3. Ruby \n4. komin"))
const repuesta3 = 4

if (pregunta3 === repuesta3) {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

// Pregunta 4
const pregunta4 = Number(prompt("Pregunta 4: ¿Que hace el operador de comparacion ===?\nSeleccione un numero de esta lista \n\n1. Establece una variable igual a otra tanto en valor como en tipo \n2. Comprueba solo la igualdad de tipo \n3. Comprueba solo la igualdad de valor \n4. Comprueba la igualdad de valor y tipo"))

const repuesta4 = 4

if (pregunta4 === repuesta4) {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

//Pregunta 5
const pregunta5 = prompt("Pregunta 5: Para colocar una lista ordenada en HTML necesitamos la etiqueta ul. Contesta con v si es verdadera o con f si es falsa")

if (pregunta5 === "f" || pregunta5 === "F") {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

//Pregunta 6
// El signo + convierte un string a numero. Es otra opcion a Number.o el numero encerrado entre dos comillas."3"
const pregunta6 = +prompt('Pregunta 6: ¿Cual de los siguientes metodos convierte un string a numero. Seleccione un numero de esta lista\n\n1. number("9")\n2. Numb("9")\n3. Number("9")')

const repuesta6 = 3

if (pregunta6 === repuesta6) {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

//Pregunta 7
const pregunta7 = confirm("Prengunta 7: Para colocar un menu de navegacion en HTML necesitamos la etiqueta navigation. Selecciona Aceptar si es verdadero o Cancelar si es falso")

if (pregunta7 === false) {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

//Pregunta 8
// otra forma para transformar un numero a string es ponerle String(5) o el numero entre comilla doble "" o simple e invertidas

const pregunta8 = prompt("Pregunta 8:¿Es verdadero que el metodo String(5) convierte el 5 a cadena de texto?. Contesta con v si es verdadera o con f si es falsa")

if (pregunta8 === "v" || pregunta8 === "V") {
    alert("Correcto")
    puntaje++

}
else {
    alert("Incorrecto")
}

// Pregunta 9
const pregunta9 = prompt("Pregunta 9: ¿Que selector en CSS selecciona todos los elementos de un documento? Seleccione una letra de la siguiente lista\n\na. +\nb. >\nc. *\nd. Ninguna")

if (pregunta9 === "c" || pregunta9 === "C") {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

// Pregunta 10
const pregunta10 = Number(prompt("Pregunta 10: ¿Cual de estas opciones no se comportan como elementos en bloque HTML por defecto?\nSeleccione un numero de esta lista \n\n1. <div> \n2. <h>\n3. <p> \n4. <img>"))
const repuesta10 = 4

if (pregunta10 === repuesta10) {
    alert("Correcto")
    puntaje++
}
else {
    alert("Incorrecto")
}

//validacion final

if (puntaje <= 5) {
    alert("Tu puntaje final fue: " + puntaje + "\n\nSegui estudiando te falta mucho para haker")

}
else if (puntaje <= 7) {
    alert("Tu puntaje final fue: " + puntaje + "\n\nVas bien, te falta un poco mas")
}
else if (puntaje <= 9) {
    alert("Tu puntaje final fue: " + puntaje + "\n\nEstas hecho un loco, se ve que estudiaste estas contratado")
}
else if (puntaje = 10) {
    alert("Tu puntaje final fue: " + puntaje + "\n\nLLgaste al nivel LUCHO ponele")
}
