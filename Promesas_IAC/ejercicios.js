// =====================================================================
// SESIÓN 2 · PROMESAS · Ejercicios 2.1, 2.2, 2.3, 2.4, 2.5 y 2.7
// Escribe tu código debajo de cada enunciado.
// Para ejecutarlo: node ejercicios.js
// (El ejercicio 2.6 está en semaforo.js)
//
// OJO: estos ejercicios tardan en terminar, así que sus mensajes se
// pueden mezclar en la consola. Cuando acabes uno, coméntalo
// (selecciónalo y pulsa Ctrl + /) antes de pasar al siguiente.
// =====================================================================


// ---------- Código que ya tienes hecho (no hace falta tocarlo) ----------

// Para el ejercicio 2.1
function hervirAgua(litros) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (litros > 0) resolve('Agua hirviendo: ' + litros + ' litros');
      else reject(new Error('No hay agua en la olla'));
    }, 3000);
  });
}

// Para el ejercicio 2.4
function pedirPizza(tipo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (tipo === 'piña') reject(new Error('No hacemos pizza con piña'));
      else resolve('Pizza ' + tipo);
    }, 1000);
  });
}

function hornearPizza(pizza) {
  return new Promise(resolve => {
    setTimeout(() => resolve(pizza + ' horneada'), 1000);
  });
}
// ------------------------------------------------------------------------


// ---------------------------------------------------------------------
// EJERCICIO 2.1 · Usar una promesa ya hecha
// La función hervirAgua (arriba) ya está hecha y devuelve una promesa.
// Úsala con then, catch y finally:
//   - con 2 litros debe salir el mensaje de éxito
//   - con 0 litros debe salir el error
//   - en los dos casos, al final debe salir «Fuego apagado»
// ---------------------------------------------------------------------

// Tu código aquí:
//Llamamos a la funcion pasando 2 litros de agua.
hervirAgua(2)
//Si se cumple la promesa se muestra el resultado.
.then (resultado => console.log(resultado))
//Si la promesa falla, sale el mensaje de error.
.catch(error => console.log(error.mesaage))
//En este caso se ejecuta si sale bien o mal.
.finally(() => console.log('Fuego apagado'));

hervirAgua(0)
//Si se cumple la promesa se muestra el resultado.
.then (resultado => console.log(resultado))
//Si la promesa falla, sale el mensaje de error.
.catch(error => console.log(error.mesaage))
//En este caso se ejecuta si sale bien o mal.

.finally(() => console.log('Fuego apagado'));




// ---------------------------------------------------------------------
// EJERCICIO 2.2 · Mi primera promesa: lanzar una moneda
// Crea lanzarMoneda(), que devuelva una promesa que tarde 500 ms y:
//   - se cumpla (resolve) con 'cara', o
//   - se rechace (reject) con new Error('cruz'),
// cada caso con un 50 % de probabilidad (pista: Math.random() < 0.5).
// Consúmela con then, catch y finally, mostrando el resultado en la
// consola. Ejecútalo varias veces.
// Pista: copia la plantilla de pedirPizza y cambia lo de dentro.
// ---------------------------------------------------------------------

// Tu código aquí:
//Creamos la funcion "lanzarMoneda"
function lanzarMoneda() {
  //Nos devuelve una promesa.
  return new Promise((resolve, reject) => {
    //Esperamos unos milisegudos para que se ejecute
    setTimeout(() => {
      //Si es menor que 0.5, la moneda sale cara.
      if (Math.random() < 0.5) {
        //Sale cara.
        resolve('cara');
      } else {
        //Si sale error , saldria cruz.
        reject(new Error('cruz'));
      }
      //Con 500 Ms
    }, 500);
  });
}
//Ejecutamos la funcion landarMoneda
lanzarMoneda()
//Si sale cara , se muestra el resultado.
.then (resultado => console.log(resultado))
//Si sale cruz, sale un error.
.catch(error => console.log(error.mesaage))
//Se ejecuta siempre al terminar promesa.
.finally(() => console.log('Moneda Lanzada'));


// ---------------------------------------------------------------------
// EJERCICIO 2.3 · Comprobar la edad
// Crea comprobarEdad(edad), que devuelva una promesa que tarde 1 segundo:
//   - si la edad es 18 o más, se cumple con 'Puede entrar'
//   - si no, se rechaza con new Error('Es menor de edad')
// Pruébala con 20 y con 15.
// ---------------------------------------------------------------------

// Tu código aquí:
//Creamos la funcion comprobarEdad
function comprobarEdad(edad) {
  //Nos devuelve una promesa.
  return new Promise((resolve, reject) => {
  //Esperamos unos milisegudos para que se ejecute
    setTimeout(() => {
      //Se comprueba si la edad es mayor o igual que 18.
      if (edad >= 18)  {
        //Si en este caso tiene 18 o mas, se cumple la promesa.
        resolve('Puede entrar');
      } else {
        //Si es menor de 18 saldria este error.
        reject(new Error('Es menor de edad'));
      }

    }, 1000);//Le aguantamos 1000 Ms
  });
}
//Lo comprobamos con la edad de 20.
comprobarEdad(20)
//Si esta bien , se muestra el resultado.
.then (resultado => console.log(resultado))
//Si esta mal, peus sale el error.
.catch(error => console.log(error.mesaage));
//Lo comprobamos con la edad de 15.
comprobarEdad(15)
//Si esta bien , se muestra el resultado.
.then (resultado => console.log(resultado))
//Si es menor de 18 saldria este error.
.catch(error => console.log(error.mesaage));



// ---------------------------------------------------------------------
// EJERCICIO 2.4 · Encuentra el fallo
// Este código debería mostrar 'Pizza margarita horneada', pero muestra
// undefined. Quita el /* y el */, ejecútalo, explica por qué pasa
// y corrígelo.
// ---------------------------------------------------------------------

// Por qué falla:
//1.Dentro del primer then llamamos a "hornearPizza(pizza), pero no devolvemos su promesa, entonces el siguiente then recibe undefined"
/*
pedirPizza('margarita')
  .then(pizza => {
    hornearPizza(pizza);
  })
  .then(pizza => console.log(pizza));
*/



// ---------------------------------------------------------------------
// EJERCICIO 2.5 · esperar(ms) y cuenta atrás
// Escribe esperar(ms), que devuelva una promesa que se cumpla pasados
// ms milisegundos. Úsala para mostrar 3, 2, 1 y ¡Ya!, con un segundo
// entre cada uno, ENCADENANDO then (un then debajo de otro, sin meter
// uno dentro de otro).
// ---------------------------------------------------------------------

// Tu código aquí:
//Creamos la funcion esperar y le metemos los milisegundos que queremos que espere.
function esperar(ms){
    //Nos devuelve una promesa.
  return new Promise((resolve, reject) => {
    Ejecutamos resolve cuando pase el tiempo que le hemos puesto.
    setTimeout(resolve,ms);
  });
}
//Aqui mostramos el numero 3 en el momento.
console.log(3);
//Esperamos 1000 Ms antes de continuar.
esperar(1000)
//Cuando termina la espera, muestra el 2.
.then(() =>{
  console.log(2);
  //Devolvemos otra promesa para 1000 Ms.
  return esperar(1000);
})

.then(() =>{
  //Cuando termina la espera, muestra el 1.

  console.log(1);
  //Devolvemos otra promesa para 1000 Ms
  return esperar(1000);
})
//Cuando termina la tercera espera, mostramos "¡Todo ok!".
.then(() =>{
  console.log('¡Todo ok!');
});


// ---------------------------------------------------------------------
// EJERCICIO 2.7 · Predice el orden (reto)
// ANTES de ejecutar, escribe tu predicción. Luego quita /* y */.
// ---------------------------------------------------------------------

// Mi predicción:
//Mi orden seria :
//1º A, 2º D, 3º C, 4º B.
//¿Por que el orden? Pues porque la A en este caso se ejecuta inmediatamente, se ejecuta inmeditamente tmb ya la D que no tiene ninguna regla
//La C creamos una promesa, para luego con un then mostrarla y por ultimo B se ejecuta despues ya que se le asigno un tiempo establecido y asi es el ultimo por la cola.

/*
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve('C').then(v => console.log(v));
console.log('D');
*/
