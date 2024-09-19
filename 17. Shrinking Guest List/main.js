// Q # 16
var guestsList = ["Hussain", "Hatim", "Asghar"];
// console.log(`Great news! I just found a bigger table for the dinner.\n`);
// Adding more guests to the Dinnner
guestsList.push("Ali", "Tahir", "Taha");
guestsList.forEach(function (guestsList) {
    // console.log(`${guestsList}, I would like to invite you for the dinner.`);
});
// Q # 17
console.log("\nI am so sorry I can only invite two people because bigger table have not reached yet.\n");
while (guestsList.length > 2) {
    var removedGuests = guestsList.pop();
    console.log("".concat(removedGuests, ", sorry you are not invited to the dinner."));
}
guestsList.forEach(function (guestsList) {
    console.log("\n".concat(guestsList, ", you are still invited to the dinner.\n"));
});
guestsList.splice(0, guestsList.length);
console.log(guestsList);
