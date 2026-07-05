// BreakStatement.js
// Demonstrates the break statement.

for (let number = 1; number <= 10; number++) {

    if (number === 6) {

        break;
    }

    console.log(number);
}

/*
==========================================
Explanation

The break statement is used
to immediately terminate
a loop.

Once break is executed,
the loop stops and control
moves to the next statement.

When to Use

Use break when you want
to stop a loop before
it finishes.

Expected Output

1
2
3
4
5

==========================================
*/