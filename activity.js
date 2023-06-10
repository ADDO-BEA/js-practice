function age(){
    console.log("15")
  }
  age()
    
  function identity (){
    console.log ("JOANA")
  }
  identity()
   
  const JOANA = (name) => {
    console.log(name + ' JOANA');
};
console.log(JOANA.name); 

var mine = (name, age) => ({
 
    name: name,
    age: age
 
})
 
var r = mine("joana", 22);
console.log(r);