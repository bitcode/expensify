// Object Destructuring _________________________________

const person = {
  name: "Andrew",
  age: 26,
  location: {
    city: "Philly",
    temp: 92
  }
};

const { name: firstName = "Anonymous", age } = person;

console.log(`${firstName} is ${age} years old.`);

const { city, temp: temperature } = person.location;

// if (city && temperature) {
//   console.log(`It's ${temperature} degrees in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enamy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// Array Destructuring ------------------------------------

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pensylvania",
//   "19147"
// ];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}.`);

// const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

// const [, , medium] = item;

// console.log(`A medium hot coffee costs ${medium}`);
