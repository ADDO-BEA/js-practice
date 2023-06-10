let colleagues=["Eddy","Lizzy","Daniel","kofi","Dorcas",]
console.log(colleagues)
console.log(colleagues[4])

for (let i = 0; i <colleagues.length; i++) {
    console.log(colleagues[1]);
}
 for (let i = 0; i <colleagues.length; i++){
    console.log(colleagues[0]);
 }
 for(let i =0; i<colleagues.length; i++ ){
    console.log(colleagues[2]);
 }
 for(let i =0; i<colleagues.length; i++){
    console.log(colleagues[3]);
 }
 for( let i=0; i<colleagues.length; i++){
    console.log(colleagues[4]);
 }


 
 let name="eddy"
 
 if (name == "eddy"){
    console.log("your are right")
 }else if(name == "edwina"){
    console.log("your are wrong")
}else if (name == "Addo"){
    console.log("your not right")
}else if (name == "Daniel"){
    console.log("your not right")
}

 let  cat = true;
 if  ( cat == true){
    console.log("your correct")
 }else{
    console.log("your not correct")
 }


 function jump(){
   console.log("Dino jump")
 }
 jump()

 function addprices(item1,item2,item3){
   let totalprice=item1+item2+item3
   console.log(totalprice)
 }
 addprices(10,20,30)




 function addprice (item1,item2){
   let total =item1+item2
   return total;
 }
 addprice (10,10)

 function tax (totalprice,taxpercentage){
   let tax= totalprice*taxpercentage
   return tax;
 }
 console.log((tax(50,30)))
 let total = addprice(10,10)+tax(addprice(10,10),0.5)
 console.log (total)
 
 

 function addprices(item1,item2,item3){
   let totalprice=item1+item2+item3
   console.log(totalprice)
 }
 addprices(180,30,50)


 
 