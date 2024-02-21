let pizza : string[] = ["Pepproni","Tikka","Fajita"]
console.log("Pizza Names:")
for(let i =0;i<pizza.length; i++)
{
    console.log(pizza[i]);
}
let pizza_message : string = "I really like ";
for(let a = 0; a<pizza.length; a++)
{
    console.log(pizza_message+pizza[a]+' pizza');
}
console.log("I really love pizza !");

