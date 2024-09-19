var friends = ["Hussain", "Ali", "Asghar", "Hatim", "Tahir"];
// By using "for" loop
for (var i = 0; i < friends.length; i++) {
    console.log("\n\"".concat(friends[i], "\" you are invited for dinner today at my place."));
}
// By using "FOR OF" loop
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var names = friends_1[_i];
    console.log("".concat(names, " would you like to learn some python today."));
}
