function foo() {
    console.log("foo");
    bar();
}

function bar() {
    console.log("bar");
}

// var foo = foo();
// var bar = bar();


function make_avg(num1, num2, num3) {
    var totalNum = num1 + num2 + num3;
    var avg = totalNum / 3;
    return avg;
}
var num1 = 62;
var num2 = 72;
var num3 = 82;
var avgNum = make_avg(num1, num2, num3);
// console.log('avg', avgNum)