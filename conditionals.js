const temperature = 5;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 10) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}