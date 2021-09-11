
//ejericio 0
function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

// usage example:
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];
var unique = values.filter( onlyUnique ); 
console.log(unique);
//ejercicio 1
function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      
      let sorted = word.toLowerCase().split('').sort().join('');
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
console.log( aclean(arr) );

//ejercicio 2 
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

console.log(keys); 
// Eso es porque map.keys() devuelve un iterable
//ejercicio3
let i = 3;
while (i) { console.log( i-- );}// Cada iteración del bucle disminuye i en 1. La comprobación while(i) detiene el bucle cuando i = 0.
//ejercicio 4

let a = 0;while (++a < 5) console.log( a );
// porque toma i le agrega uno y devuelve el valor.Esto es prefijar, agregar al número antes de usarlo en la operación.
let b = 0;while (b++ < 5) console.log( b );
//porque toma i, almacena una copia, agrega 1 y devuelve la copia.Entonces obtienes el valor que tenía, pero también lo incrementas al mismo tiempo.Por lo tanto, imprime el valor anterior pero se incrementa

//ejercicio 5
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
//ejercicio 6

const makeCounter =  { // instead of: // 
    count: 0 ,
    counter: function() { 
      return  this.count ++; 
    },
    set: function(value) { 
      return this.count = value; 
    },
    decrease: function() {
      return this.count - 1;
      
    } 

}
    console.log(makeCounter.counter());
console.log(makeCounter.set(20));
console.log(makeCounter.decrease());
//ejercicio 7
let num;

do {
  num = prompt("Ingresa un número mayor a 100", 0);
} while (num <= 100 && num);


