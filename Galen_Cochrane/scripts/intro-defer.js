/*
 * Galen Cochrane
 * Frbruary 2 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 3 - Part I
 * Purpose: This script is an introduction to JavaScript.
 * It tests the basics of the language, and its loading
 * is deferred in the HTML that loads it.
 */

if (loadLast !== undefined) {
  alert("The deferred script has run.");
  alert(loadLast);
}