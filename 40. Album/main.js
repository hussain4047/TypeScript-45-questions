function make_album(artist_name, album_title, tracks_number) {
    var album = { artist_name: artist_name, album_title: album_title };
    if (tracks_number) {
        album["Tracks"] = tracks_number;
    }
    return album;
}
console.log(make_album("Artist One", "First Album"));
console.log(make_album("Artist Two", "Second Album"));
console.log(make_album("Artist Three", "Third Album", 15));
