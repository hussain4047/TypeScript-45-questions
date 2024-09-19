let magicians = ["Alice", "Bob", "Peter", "James"];

function show_magicians (magicians : string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
    
  })
}

function make_great (magicians : string[]) {
  for (let i = 0; i < magicians.length ; i++){
    console.log(magicians[i] = "The Great" + magicians[i]);
  }
}
show_magicians(magicians)
make_great(magicians)
show_magicians(magicians)