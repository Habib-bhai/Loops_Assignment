// Instructions:
// 1. Create a simple object with three items:
// o Define an object called myObject with three properties: item1, item2, and item3,
// each with corresponding string values.
// 2. Use a for...in loop to get properties' names and values from the object:
// o Iterate through the properties of myObject using a for...in loop.
// o Inside the loop, print each property's name and its corresponding value to the
// console.
var myObject = {
    item1: "Bugatti",
    item2: "Hayabusa",
    item3: "s24 Ultra Pro Max Mian Bhai"
};
for (var properties in myObject) {
    console.log("".concat(properties, ": ").concat(myObject[properties]));
}
