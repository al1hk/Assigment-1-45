let current_users : string[] = ['Ahmed','Ayesha','Amna','Bashar']
let new_users : string[] = ["Raza","Nadia","Ahmed","Rana","Ayesha"]
let current_user_lower : string[] = current_users.map(user=> user.toLowerCase())
for(let new_user of new_users)
    {
        if(current_user_lower.includes(new_user.toLowerCase())
        ){
            console.log(`Sorry ${new_user} name is already taken!`)
        }
        else
        {
            console.log(`Yes ${new_user} name is available for you to use!`)
        }
    }
