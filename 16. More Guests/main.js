var guestsList = ["Hussain", "Hatim", "Asghar"];
console.log("Great news! I just found a bigger table for the dinner.\n");
// Adding more guests to the Dinnner
guestsList.push("Ali", "Tahir", "Taha");
guestsList.forEach(function (guestsList) {
    console.log("".concat(guestsList, ", I would like to invite you for the dinner."));
});
