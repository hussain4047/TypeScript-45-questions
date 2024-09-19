function make_sandwich (...items : string[]){
  console.log(`Making a sandwich using ${items.join(", ")}.`);
}
make_sandwich("Cheese")
make_sandwich("Cheese", "Chiken", "Ketchup")
make_sandwich("Cheese", "Beef", "Mayo", "Ketchup")