let favTransportation : string[] = ["Honda 150", "Yamaha 125", "Suzuki 110"]

// By using "for of" loop.
for(let names of favTransportation){
  console.log(`\nI would like to own a ${names}.`);
}

// By using "for each". 
favTransportation.forEach(favTransportation => {
  console.log(`I would like to own a ${favTransportation}`);
});