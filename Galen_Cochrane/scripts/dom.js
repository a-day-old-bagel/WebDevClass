/*
 * Galen Cochrane
 * February 17 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 5 - Part II
 * Purpose: This script explores DOM manipulation.
 */
 "use strict";

function showInnerText() {
  alert(document.getElementById("pOne").innerText);
}

function showInnerHTML() {
  alert(document.getElementById("pOne").innerHTML);
}

// Can only effectively run once. Method of doing this (using closure) was found on StackOverflow:
// https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once
var numberList = (function() {
  var executed = false;
  return function() {
    if (!executed) {
      executed = true;

      // The important part
      var list = document.getElementsByTagName("li");
      for (var i = 0; i < list.length; ++i) {
        var newText = document.createTextNode("" + (i + 1));
        list[i].appendChild(newText);
      }

    }
  };
})();

function markRows() {
  var rows = document.getElementById("tblMarkRows").getElementsByTagName("tr");
  for (var i = 0; i < rows.length; i += 2) {
    rows[i].classList.add("other");
  }
}

// Can only effectively run once. Method of doing this (using closure) was found on StackOverflow:
// https://stackoverflow.com/questions/12713564/function-in-javascript-that-can-be-called-only-once
var addRows = (function() {
  var executed = false;
  return function() {
    if (!executed) {
      executed = true;

      // The assignment said to declare these lists, but it didn't say they had to be global.
      var firstNames = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
      var lastNames = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
      var ages = [36, 34, 7, 34, 32, 8];

      if (firstNames.length && firstNames.length === lastNames.length && lastNames.length === ages.length) {
        var table = document.getElementById("tblAddRows");
        for (var i = 0; i < firstNames.length; ++i) {
          var newRow = table.insertRow(1);
          var first = newRow.insertCell(0);
          var last = newRow.insertCell(1);
          var age = newRow.insertCell(2);
          first.innerText = firstNames[i];
          last.innerText = lastNames[i];
          age.innerText = ages[i];
          if ((i + 1) % 2) { // +1 for consistency with previous table colorings.
            newRow.classList.add("other");
          }
        }
      } else {
        alert("Names and ages lists are foobar! Abort!");
      }

    }
  };
})();

function addSuccess() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("success");
  newDiv.innerText = "Success";
  document.getElementById("divMessages").appendChild(newDiv);
}

function addWarning() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("warning");
  newDiv.innerText = "Warning";
  document.getElementById("divMessages").appendChild(newDiv);
}

function addError() {
  var newDiv = document.createElement("div");
  newDiv.classList.add("error");
  newDiv.innerText = "Error";
  document.getElementById("divMessages").appendChild(newDiv);
}
