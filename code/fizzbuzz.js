// Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number 
//and for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”.


//solution 1
for (let i = 1; i <= 100; i++) {
if(i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    
    } else if(i % 3 === 0){
        console.log("Fizz");
            
    }else if(i % 5 === 0){
     console.log("Buzz");
    
    } else{
     console.log(i);
      }
       }

    
//solution 2 med förklaringar av koden 

// Loop from 1 to 100
for (let i = 1; i <= 100; i++) {
    // Check if the number is a multiple of both 3 and 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    }
    // Check if the number is a multiple of 3
    else if (i % 3 === 0) {
        console.log('Fizz');
    }
    // Check if the number is a multiple of 5
    else if (i % 5 === 0) {
        console.log('Buzz');
    }
    // If none of the above conditions are met, just print the number
    else {
        console.log(i);
    }
}
