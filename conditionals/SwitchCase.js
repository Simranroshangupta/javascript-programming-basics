// SwitchCase.js
// Demonstrates the switch statement.

let day = 3;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}

/*
==========================================
Explanation

The switch statement
is used when a variable
has multiple possible values.

The break statement
prevents the execution
of the next case.

The default block executes
if no case matches.

Expected Output

Wednesday

==========================================
*/