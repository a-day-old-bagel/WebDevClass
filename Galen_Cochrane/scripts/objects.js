/*
 * Galen Cochrane
 * Frbruary 2 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 4 - Part I
 * Purpose: This script explores objects in JS.
 */

function Person(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.sequenceCount = function() {
    var sequence = "";
    for (var i = 1; i <= this.stepsToTake; ++i) {
      sequence += i.toString() + " ";
    }
    return sequence;
  }
  this.oddSummorial = function() {
    var sum = 0;
    for (var i = 1; i <= this.age; i += 2) {
      sum += i;
    }
    return sum;
  }
}

// Conversion between C and F is common knowledge, so I didn't have to "do research."
// However, if you want a source, try https://www.rapidtables.com/convert/temperature/
function Converter() {
  this.fToC = function(fVal) {
    return (fVal - 32) * (5 / 9);
  }
  this.cToF = function() {
    return arguments[0] * (9 / 5) + 32;
  }
}

function sayHello() {
  greet("Hello");
}

function greet(salutation) {
  var name = prompt("What is your name?");
  alert(salutation + ", " + name);
}

function doMaths(lhs, rhs) {
  var concat = lhs.toString() + rhs.toString();
  var sum = lhs + rhs;
  var difference = lhs - rhs;
  var product = lhs * rhs;
  var quotient = lhs / rhs;
  alert(concat + "\n" + sum + "\n" + difference + "\n" + product + "\n" + quotient);
}

function createPerson() {
  first = prompt("What is your first name?");
  last = prompt("What is your last name?");
  age = prompt("What is your age (0-200)?");
  if (age < 0 || age > 200 || isNaN(age)) {
    alert("Object not filled: Invalid age. Please Try again.");
  } else {
    personHolder = new Person(first, last);
    personHolder.age = age;
  }
}

function showSteps() {
  if (typeof personHolder !== "undefined") {
    personHolder.stepsToTake = 10;
    var sequenceCount = personHolder.sequenceCount();
    alert(personHolder.first + " " + personHolder.last + " took steps\n" + sequenceCount);
  } else {
    alert("Object does not exist. Please click the 'Fill Object' button first.");
  }
}

function getDegreesInC(fVal) {
  var converter = new Converter();
  alert(converter.fToC(fVal));
}

function getDegreesInF(cVal) {
  var converter = new Converter();
  alert(converter.cToF(cVal));
}

function fillCharacterArray() {
  firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
  lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
  ages = [36, 34, 7, 34, 32, 8];
  characters = [];
  for (var i = 0; i < 6; ++i) {
    person = new Person(firstNames[i], lastNames[i]);
    character = new Object(person);
    character.age = ages[i];
    characters.push(character);
  }
}

function getCharacterAt(index) {
  if (typeof characters !== "undefined") {
    var name = characters[index].firstName;
    var oddAgeSummorial = characters[index].oddSummorial();
    alert(name + ", your odd age sum is " + oddAgeSummorial);
  } else {
    alert("Array has not been filled. Please click the 'Fill Characters array' button.");
  }
}

var personHolder;
var characters;