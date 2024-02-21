let animals : string[] = ['Cat','Dog','Rabbit'];
console.log("Names of pet:")
let message_animals: string = " would make a great pet!"
for(let a = 0; a<animals.length;a++)
{
    console.log(animals[a]);
}
for(let b=0;b<animals.length;b++)
{
    console.log(animals[b] + message_animals);
}
console.log("Any of these animals would make a great pet!")

