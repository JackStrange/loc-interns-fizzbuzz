// Part 1
function fizzbuzz() {
    for(var i = 1; i <= 100; i++) {
        let output = ""
        if(i%3 === 0) output += "Fizz";
        if(i%5 === 0) output += "Buzz";
        if(output === "") console.log(i);
        else console.log(output);
    }
}

// Now, we run the main function:
fizzbuzz();

