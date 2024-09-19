let places : string[] = ["Maldives", "Bhitkhori Beach", "Switzerland", "Naraan", "Charna Island"];
console.log(places);
let alphabetical = [...places].sort()
// console.log(alphabetical);
// console.log(places);
let reversedArray = [...places].sort().reverse()
// console.log(reversedArray);
// console.log(places);
let reversedPlaces = places.reverse()
console.log(reversedPlaces);
let orignalPlaces = reversedPlaces.reverse()
console.log(orignalPlaces);
let alphabeticalArray = orignalPlaces.sort()
console.log(alphabetical);
let reversedAlpha = alphabeticalArray.reverse()
console.log(reversedAlpha);