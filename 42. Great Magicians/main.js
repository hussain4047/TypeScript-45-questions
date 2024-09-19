var magicians = ["Alice", "Bob", "Peter", "James"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i] = "The Great" + magicians[i]);
    }
}
show_magicians(magicians);
make_great(magicians);
show_magicians(magicians);
