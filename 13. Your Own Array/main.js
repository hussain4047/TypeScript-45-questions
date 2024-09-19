var favTransportation = ["Honda 150", "Yamaha 125", "Suzuki 110"];
// By using "for of" loop.
for (var _i = 0, favTransportation_1 = favTransportation; _i < favTransportation_1.length; _i++) {
    var names = favTransportation_1[_i];
    console.log("\nI would like to own a ".concat(names, "."));
}
// By using "for each". 
favTransportation.forEach(function (favTransportation) {
    console.log("I would like to own a ".concat(favTransportation));
});
