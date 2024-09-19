// Q no. 14
let invitation : string[] = ["Hussain", "Ali", "Asghar"];

invitation.forEach(invitation => {
  console.log(`Dear ${invitation}, I would like to invite you for Dinner.`);  
})

// Q no. 15
// name of the guest who will not attend the dinner.
let unableToAttend = `"Ali"`
console.log(`\n${unableToAttend} can't be able to make it to the dinner.\n`);

// replacing the new guest with the guest who will not attend.
let newGuest : string = "Hatim";
invitation[invitation.indexOf(unableToAttend)] = newGuest;

invitation.forEach(invitation => {
  console.log(`Dear ${invitation}, would you like to  join us for dinner today?`);
})