// function functionName(parameters) {
//     function body
//         return
// }


function getTotal(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 60;
const assignment2Marks = 70;
const assignment3Marks = 80;

var myAverage = getTotal(assignment1Marks, assignment2Marks, assignment3Marks);
// console.log('my average' + myAverage)

// Function parameter, function return
// No return & no Parameter

function prepareJuice() {
    //make juice using a fruit
    //save for future
}
prepareJuice();

//Has return & no parameter
function prepareJuice() {
    //make juice using a fruit
    //pour in it glass 
    return glass;
}

var servedJuice = prepareJuice();


// no return & Has parameter

function prepareJuice(fruit) {
    //make juice
    //save for future
}
prepareJuice(fruit);

//has return & has parameter

function prepareJuice(fruit) {
    //make juice
    //pour it in glass
    return glass;
}

var servedJuice = prepareJuice(fruit);
