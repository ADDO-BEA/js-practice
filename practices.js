



class User {
    constructor (Tittle,age,phone,email,password){

    this.Tittle=Tittle;
    this.age=age;
    this.phone=phone;
    this.email=email;
    this.password=password;
    }
}
const user1= new User (


);


class Akrobeto{
    constructor(size){
    this.size=size
    }
}

class son extends Akrobeto{
    noseSize(){
    console.log ('He has a '+this.size+"nose.");

    }

}
const Aj=new son ("big")
Aj.noseSize();
 



///object excercise
 
let object= {
    name:"stanly",
    age:45,
    email:'mailto:test@example.com',
    
   
   };
   console.log(object["name"]);
   console.log(object.age);




   let person= {
    student:"student",
    num:9,
    favcolor:"red"
   
   };
   console.log (person.student)
   console.log(person.num);




   let course ={
     name:"business",
     hours:67,
     height:178,
   
   };
   console.log(course.name);
   console.log(course.hours)
