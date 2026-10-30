// =====================================================================
// EJERCICIO 2.6 · Adiós, pirámide: el semáforo con promesas
// Abre semaforo.html en el navegador para ver el resultado.
//
// Rehaz el semáforo del ejercicio 1.4 (verde 3 s → ámbar 1 s → rojo 3 s,
// y vuelta a empezar), pero ahora con promesas:
//
// 1. Copia aquí tu función esperar(ms) del ejercicio 2.5.
// 2. Crea color(c, ms), que pinte el círculo con el color c
//    y DEVUELVA esperar(ms).
// 3. Encadena los tres colores con then, sin meter un then dentro de otro.
//
// Compara la forma del código con la de tu versión del ejercicio 1.4.
// =====================================================================

const semaforo = document.getElementById('semaforo');

// Tu código aquí:

//Creamos la función esperar.
// Recibe los milisegundos que queremos esperar.
function esperar(ms) {

  // Devolvemos una promesa.
  return new Promise(resolve => {

    // Cuando pase el tiempo indicado, se resuelve la promesa.
    setTimeout(resolve, ms);

  });
}
//Creamos la función color.
// Recibe el color que queremos encender y el tiempo que debe durar.
function color(c, ms) {

  // Cambiamos la clase CSS del semáforo al color indicado.
  semaforo.className = c;

  // Devolvemos una promesa que espera los milisegundos indicados.
  return esperar(ms);

}
//Encadenamos los tres colores.
// Primero encendemos el verde durante 3 segundos.
color('verde', 3000)

  // Cuando termina el verde, encendemos el ámbar durante 1 segundo.
  .then(() => color('ambar', 1000))

  // Cuando termina el ámbar, encendemos el rojo durante 3 segundos.
  .then(() => color('rojo', 3000))

  // Cuando termina el rojo, volvemos a empezar desde el verde.
  .then(() => color('verde', 3000))

  // Repetimos el ciclo encadenando de nuevo las promesas.
  .then(() => color('ambar', 1000))

  .then(() => color('rojo', 3000))

  .then(() => color('verde', 3000));
