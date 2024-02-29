function makeAlbum (artist:string, title:string) : {artist: string, title: string}
{
    const details = {
        artist : artist.charAt(0).toUpperCase() + artist.slice(1)
        ,title : title.charAt(0).toUpperCase() + title.slice(1)
    };
    return details;
    
}
var album = makeAlbum('Weeknd','Out Of Time')
console.log(album)
var album = makeAlbum("Tale Impala","Let it Happen")
console.log(album)
var album = makeAlbum("Weeknd","Starboy")
console.log(album)