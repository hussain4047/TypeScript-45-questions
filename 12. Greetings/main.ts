let friends : string[] = ["Hussain", "Ali", "Asghar", "Hatim", "Tahir"]

// By using "for" loop
for(let i = 0; i < friends.length; i++){
  console.log(`\n"${friends[i]}" you are invited for dinner today at my place.`);
}

// By using "FOR OF" loop
for(let names of friends){
  console.log(`${names} would you like to learn some python today.`); 
}