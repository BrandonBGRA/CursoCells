var numbers = [5, 32, 43, 4];

let resultado = numbers.filter(function(n) { return n % 2 !== 0; });

console.log(resultado);

// Verifica si un numero es impar, siendo el residuo diferente a 0.

var people = [{
    id: 1,
    name: "John",
    age: 28
   }, {
    id: 2,
    name: "Jane",
    age: 31
   }, {
   id: 3,
    name: "Peter",
   age: 55 }];

let edadMenor = people.filter( menor => menor.age < 35);
console.log(edadMenor);

let people = [
    { name: "bob", id: 1 },
    { name: "john", id: 2 },
    { name: "alex", id: 3 },
    { name: "john", id: 4 }
  ];

  function numeroDeVeces(arr) {
    return arr.reduce((nombreCuenta, persona) => {

      let nombre = persona.name;

      // Incrementamos el contador de ese nombre o lo inicializamos en 1
      nombreCuenta[nombre] = (nombreCuenta[nombre] || 0) + 1;

      return nombreCuenta;
    }, {});
  }

  // Llamamos a la función y almacenamos el resultado en una variable
  let numero = numeroDeVeces(people);

  // Imprimimos el resultado para verificar
  console.log(numero);

  var myArray = [1, 2, 3, 4];

  function imprimirMaximoMinimo(arr) {
    var maximo = Math.max(...arr);
    var minimo = Math.min(...arr);
    console.log("Número máximo:", maximo);
    console.log("Número mínimo:", minimo);
  }

  imprimirMaximoMinimo(myArray);



  var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
   };


   var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
  };

  function valorKeys(obj) {

    let keys = Object.keys(obj);


    keys.sort((a, b) => obj[a] - obj[b]);

    return keys;
  }


  let KeysOrden = valorKeys(object);


  console.log(KeysOrden);