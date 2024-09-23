// Challenge 1

const marks = [85, 97, 44, 37, 76, 60];

const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;

console.log(average);

// Challenge 2

const prices = [250, 645, 300, 900, 50];

const discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);

// Challenge 3

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company
companies.shift();

// b. Remove "Uber" & Add "Ola" in its place
const uberIndex = companies.indexOf("Uber");
if (uberIndex !== -1) {
    companies.splice(uberIndex, 1, "Ola");
}

// c. Add "Amazon" at the end
companies.push("Amazon");

console.log(companies);

