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

function fizzbuzzinput(max_no) {
    divisor_map = {3:"Fizz",5:"Buzz",7:"Bang",11:"Bong",13:"Fezz"};
    for(var i = 1; i <= max_no; i++) {
        let out_arr = [];

        // Standard fizz-buzz checks
        if(i%11 !== 0){
            if(i%3 === 0) out_arr.push(divisor_map[3]);
            if(i%5 === 0) out_arr.push(divisor_map[5]);
            if(i%7 === 0) out_arr.push(divisor_map[7]);
        }else {
            out_arr.push(divisor_map[11]);
        }

        if(i%13 === 0) {
            // Insert "Fezz" into relevant position
            let b_index = -1;
            for(let i = 0; i < out_arr.length; i++){
                if (out_arr[i][0] === 'B') {
                    b_index = i;
                }
            }
            if(b_index !== -1) out_arr.splice(b_index,0,divisor_map[13]);
            else out_arr.push(divisor_map[13]);
        }
        if(i%17 === 0) out_arr = out_arr.reverse();

        if(out_arr.length === 0) console.log(i);
        else console.log(out_arr.join(""));
    }
}

// Input jargon courtesy of codecademy
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Number max: ', n => {
    fizzbuzzinput(n);
    readline.close();
});

