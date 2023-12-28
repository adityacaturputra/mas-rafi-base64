// Define the string
var decodedStringBtoA = "Hello World!";

// Encode the String
var encodedStringBtoA = btoa(decodedStringBtoA);

console.log(encodedStringBtoA);

// Define the string
var encodedStringAtoB = "SGVsbG8gV29ybGQh";

// Decode the String
var decodedStringAtoB = atob(encodedStringAtoB);

console.log(decodedStringAtoB);
