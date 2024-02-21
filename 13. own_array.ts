let vehicles : string[] = ['Audi','Mclaren','Dodge'];
let cars_message : string = ("I would like to own a ");
for(let i = 0; i<vehicles.length; i++)
{
    console.log(cars_message + vehicles[i]);
}