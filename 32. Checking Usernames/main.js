var current_users = ["user1", "user2", "user3", "user4", "user5"];
var new_users = ["user1", "user2", "user6", "user7", "user8"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, ", will need to change their username"));
    }
    else {
        console.log("".concat(newUser, " is available"));
    }
});
