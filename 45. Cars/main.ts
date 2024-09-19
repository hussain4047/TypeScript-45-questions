function make_car (manufacturer: string, model : number, ...other : [string, any][]) {
  let myCar = {manufacturer, model}
  other.forEach(([key, value]) => (myCar[key] = value));
  return myCar;
}

console.log(make_car("TOYOTA", 2024, ["colour", "red"], ["mode", "Hybrid"]));
console.log(make_car("TOYOTA", 2024, ["colour", "red"], ["mode", "Hybrid"], ["sunroof", "True"]));
