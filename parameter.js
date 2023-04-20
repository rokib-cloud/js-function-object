function bringCoke(money) {
    var cokePrice = 35;
    var quantity = money / cokePrice;
    return quantity;
}

var cokes = bringCoke(100);
console.log('ei nau', cokes)
