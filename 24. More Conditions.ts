let a = 10
let b = 15
let c = 20
console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a<b && b<c);
console.log(a==b || b!=c);
let places : string[] = ["Tokyo","Texas","Nairobi"];
if(places.includes('Tokyo'))
{
    console.log('Tokyo is included in the list');
}
if(!places.includes('Karachi'))
{
    console.log('Karachi is not in the list');
}
