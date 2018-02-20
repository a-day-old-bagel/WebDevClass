/*
 * Galen Cochrane
 * Frbruary 2 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 3 - Part I
 * Purpose: This script is an introduction to JavaScript.
 * It tests the basics of the language, and it's loaded
 * last in the HTML that loads it.
 */

var greeting = prompt("Enter a greeting:");
if (greeting === null || greeting === "") {
  alert("You pressed cancel. Now what am I supposed to do?");
} else {
  alert(greeting + ", " + getName());
}
loadLast = "I really am last";