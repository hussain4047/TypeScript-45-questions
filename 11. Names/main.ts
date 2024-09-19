let friends : string[] = ["Hussain", "Ali", "Asghar", "Tahir", "Hatim"];

// Manual way of accessing every name.
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);

// used "For" loop for accessing every name.
for(let i = 0; i < friends.length; i++){
  console.log(friends[i]);
}

// used "While" loop for accessing every name.
let i = 0
while(i<friends.length){
  console.log(friends[i]);
  i++
}