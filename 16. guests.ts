let guests : string[] = ["Father","Mother","Brother","Aunt"];
let message_guests : string = " You are welcome to my birthday party at my home on Thursday";
let absent_guest : string = "Aunt"
let new_guest : string = "Sister"
guests[3] = new_guest;
guests.unshift("Cousin");
guests.push("Friends");
console.log("Hurrah! We have found a bigger table. So there will be more people in our party!")
for(let a = 0; a<guests.length; a++)
{
    console.log(guests[a] + message_guests);
 }
 console.log("Sadly " + absent_guest +" will not be joining us in our party");
