function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich using ".concat(items.join(", "), "."));
}
make_sandwich("Cheese");
make_sandwich("Cheese", "Chiken", "Ketchup");
make_sandwich("Cheese", "Beef", "Mayo", "Ketchup");
