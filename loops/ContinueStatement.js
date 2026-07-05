// ContinueStatement.js
// Demonstrates the continue statement.

for (let number = 1; number <= 5; number++) {

    if (number === 3) {

        continue;
    }

    console.log(number);
}

/*
==========================================
Explanation

The continue statement
skips the current iteration
and moves to the next one.

Unlike break,
it does not terminate
the loop.

When to Use

Use continue when you
want to skip specific
iterations without
stopping the loop.

Expected Output

1
2
4
5

==========================================
*/