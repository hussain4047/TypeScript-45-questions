var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Maldives", "Bhitkhori Beach", "Switzerland", "Naraan", "Charna Island"];
console.log(places);
var alphabetical = __spreadArray([], places, true).sort();
// console.log(alphabetical);
// console.log(places);
var reversedArray = __spreadArray([], places, true).sort().reverse();
// console.log(reversedArray);
// console.log(places);
var reversedPlaces = places.reverse();
console.log(reversedPlaces);
var orignalPlaces = reversedPlaces.reverse();
console.log(orignalPlaces);
var alphabeticalArray = orignalPlaces.sort();
console.log(alphabetical);
var reversedAlpha = alphabeticalArray.reverse();
console.log(reversedAlpha);
