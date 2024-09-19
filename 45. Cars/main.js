function make_car(manufacturer, model) {
    var other = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        other[_i - 2] = arguments[_i];
    }
    var myCar = { manufacturer: manufacturer, model: model };
    other.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return (myCar[key] = value);
    });
    return myCar;
}
console.log(make_car("TOYOTA", 2024, ["colour", "red"], ["mode", "Hybrid"]));
console.log(make_car("TOYOTA", 2024, ["colour", "red"], ["mode", "Hybrid"], ["sunroof", "True"]));
