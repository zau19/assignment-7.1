var age = prompt('what is your age?');

if (age < 0) {
    console.log("error message.");
} else if (age == 21) {
    console.log('happy 21st birthday!!');
} else if (age % 2 !== 0) {
    console.log('your age is odd!');
} else if (age % 2 === 0) {
    console.log('your age is even!');
}