let guests : string[] = ["Father","Mother","Brother","Aunt"];
let message_guests : string = " You are welcome to my birthday party at my home on Thursday";
let absent_guest : string = "Aunt"
let new_guest : string = "Sister"
guests[3] = new_guest;
guests.unshift("Cousin");
guests.push("Friends");
//for(let a = 0; a<guests.length; a++)
//{
//   console.log(guests[a] + message_guests);
// }
 console.log("Sadly " + absent_guest +" will not be joining us in our party");
console.log("Sorry everyone we cannot arange big table. Therefore, only two people will be invited");
while(guests.length > 2){

    let removed_guests = guests.pop();
    console.log("Sorry "+removed_guests+" We can only invite two people to our party. Therefore, you are not invited");
}
for(let a = 0; a<guests.length; a++)
{
   console.log(guests[a] + " You are still invited to our party");
}

guests.splice(0,2);
console.log(guests);
 
