function makeGreat(magician : string[]) : void
{
    for(let a = 0; a<magician.length; a++)
    {
        magician[a] = magician[a] + ' the great';
    }
}
const names : string[] = ['Ali','Roshan','Abdullah'];
makeGreat(names)
console.log(names)

