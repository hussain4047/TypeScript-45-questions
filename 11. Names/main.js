var friends = ["Hussain", "Ali", "Asghar", "Tahir", "Hatim"];
// Manual way of accessing every name.
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[3]);
console.log(friends[4]);
// used "For" loop for accessing every name.
for (var i_1 = 0; i_1 < friends.length; i_1++) {
    console.log(friends[i_1]);
}
// used "While" loop for accessing every name.
var i = 0;
while (i < friends.length) {
    console.log(friends[i]);
    i++;
}
