// Q no. 14
var invitation = ["Hussain", "Ali", "Asghar"];
invitation.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, ", I would like to invite you for Dinner."));
});
// Q no. 15
// name of the guest who will not attend the dinner.
var unableToAttend = "\"Ali\"";
console.log("\n".concat(unableToAttend, " can't be able to make it to the dinner.\n"));
// replacing the new guest with the guest who will not attend.
var newGuest = "Hatim";
invitation[invitation.indexOf(unableToAttend)] = newGuest;
invitation.forEach(function (invitation) {
    console.log("Dear ".concat(invitation, ", would you like to  join us for dinner today?"));
});
