function printList (lista) {
    console.log(lista.value);
    if (lista.next !== null) {
        printList(lista.next);
    } else {
        return;
    }
}
function printListBucle(list){
    while(list.next !== null){
      list = list.next;
      console.log(list.value);
    }
}
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};


console.log(printList(list));
console.log(printListBucle(list));

const makeCounter =  { 
    count:0  ,
    set: function(value) { 
        return this.count = value; 
      },
    counter: function() { 
      return  this.count = +1; 
    },
    decrease: function() {
      return this.count - 1;
      
    } 

}
  
console.log(makeCounter.counter());
console.log(makeCounter.set(100));
console.log(makeCounter.decrease());