var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}

var penCount = shoppingCart.pen;

var penCount2 = shoppingCart['pen'];

var propertyName = 'sunglass';
var propertiesValue = shoppingCart[propertyName];

var properties = Object.keys(shoppingCart);
var propertiesValues = Object.values(shoppingCart);
console.log(properties)
console.log(propertiesValues)


const keys = Object.keys(shoppingCart)

// console.log(propertyName, propertiesValue)

// var keys = [ 'books', 'sunglass', 'keyboard', 'mouse', 'pen' ]

for (var i = 0; i < keys.length; i++) {
    var propertyName = keys[i];
    var propertiesValue = shoppingCart[propertyName];
    // console.log(propertyName, propertiesValue);
}

// for in loop
for (var propertyName in shoppingCart) {
    const value = shoppingCart[propertyName]
    // console.log(propertyName, value);
}

