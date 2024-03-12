let username : string[] = ["Admin",'Eric',"Bob",'John','Stacy']
let admin_message : string = ", would you like to see today's report?"
if(username.includes('Admin'))
{
    console.log('Hey ' + username[0] + admin_message);
}
    for(let a = 1; a<username.length; a++)
    {
        console.log("Hello " + username[a] + ", thank you for logging in again");
    }
