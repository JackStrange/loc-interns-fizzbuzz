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
    divisor_map = {3:"Jack",5:"Chit",7:"Lyric",11:"Chhavi",13:"Connor",19:"Kevin"};
    for(var i = 1; i <= max_no; i++) {
        let out_arr = [];

        // Standard fizz-buzz checks
        if(i%11 !== 0){
            if(i%3 === 0) out_arr.push(divisor_map[3]);
            if(i%5 === 0) out_arr.push(divisor_map[5]);
            if(i%7 === 0) out_arr.push(divisor_map[7]);
            if(i%19 === 0) out_arr.push(divisor_map[19]);
        }else {
            out_arr.push(divisor_map[11]);
        }

        if(i%13 === 0) {
            let add_flag = false;
            let j = 0;

            // Insert Fezz in relevant position
            while(!add_flag && j < out_arr.length){
                if(out_arr[j][0] === 'B'){
                    out_arr.splice(j,0,divisor_map[13]);
                    add_flag = true;
                }
                j++;
            }
            if(!add_flag) out_arr.push(divisor_map[13]);
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
let max_no = 0;
readline.question('Number max: ', n => {
    fizzbuzzinput(n);
    readline.close();
});

