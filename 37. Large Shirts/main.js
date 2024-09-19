function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I Love TypeScript"; }
    console.log("\nMaking a ".concat(size, " t-shirt with ").concat(message, " printed on it."));
}
make_shirt();
make_shirt("Mediun");
make_shirt("Small", "I Love React");
