let current_users : string[] = ["user1", "user2", "user3", "user4", "user5"];
let new_users : string[] = ["user1", "user2", "user6", "user7", "user8"];

new_users.forEach((newUser) => {
  if(current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())){
    console.log(`${newUser}, will need to change their username`);
    
  } else{
    console.log(`${newUser} is available`);
    
  }
})