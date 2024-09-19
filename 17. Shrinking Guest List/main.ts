// Q # 16
let guestsList: string[] = ["Hussain", "Hatim", "Asghar"];
// console.log(`Great news! I just found a bigger table for the dinner.\n`);

// Adding more guests to the Dinnner
guestsList.push("Ali", "Tahir", "Taha")
guestsList.forEach(guestsList => {
  // console.log(`${guestsList}, I would like to invite you for the dinner.`);
})

// Q # 17
console.log(`\nI am so sorry I can only invite two people because bigger table have not reached yet.\n`);

while(guestsList.length > 2){
  let removedGuests = guestsList.pop()
  console.log(`${removedGuests}, sorry you are not invited to the dinner.`);  
}

guestsList.forEach(guestsList => {
  console.log(`\n${guestsList}, you are still invited to the dinner.\n`);
})

guestsList.splice(0 , guestsList.length)

console.log(guestsList);