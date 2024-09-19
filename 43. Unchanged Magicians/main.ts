let magicians : string[] = ["Alice", "Bob", "Peter"];

function make_great (magicians : string[]) {
  let greatMagicians = [];
  magicians.forEach((magician) => {
    greatMagicians.push(`The Great ${magician}`);
  });
  return greatMagicians;
}

function show_magicians (magicians : string[]) {
  magicians.forEach((magician) => {
    console.log(magician);
    
  });
}

let greatMagicians = make_great(magicians.slice());

console.log(`Original Magicians:`);
show_magicians(magicians);
console.log(`Great Magicians:`);
show_magicians(greatMagicians);