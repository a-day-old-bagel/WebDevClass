/*
 * Galen Cochrane
 * Frbruary 2 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 6 - Part III
 * Purpose: This script explores events in JS.
 */
 "use strict";

window.onload = function() {
  document.getElementById("secMouser").addEventListener("mouseover", moveMouse);
  document.getElementById("secMouser").addEventListener("mousedown", mousePressed);
  document.getElementById("secMouser").addEventListener("mouseup", resetClass);

  // Would use document.querySelectorAll to get *all* headers, but IE is garbage. Yes, garbage.
  // To get all headers with this call, I'd have to merge a bunch of lists. Let's not and
  // say we did.
  var headers = document.getElementsByTagName("h1")
  for (var i = 0; i < headers.length; ++i) {
    headers[i].addEventListener("mouseover", mouseHeadOver);
    headers[i].addEventListener("mouseout", resetClass);
  }

  document.getElementById("btnSayHello").addEventListener("mousedown", function () {
    alert("Hello, User.");
  });
  document.getElementById("btnSayHello").addEventListener("mouseover", function (e) {
    stopTheBuble(e);
    var evt = e || window.event;
    document.getElementById("mouseCoords").innerText = "Over the button";
  });
}

function moveMouse(e) {
  var evt = e || window.event;
  document.getElementById("mouseCoords").innerText = "x: " + evt.clientX + " y: " + evt.clientY;
}

function mousePressed(e) {
  var evt = e || window.event;
  var trgt = evt.target || evt.srcElement;
  var ctgt = evt.currentTarget;
  if (trgt != ctgt) {
    trgt.classList.add("pressed");
  }
}

function resetClass(e) {
  var evt = e || window.event;
  var trgt = evt.target || evt.srcElement;
  trgt.classList = "";
}

function mouseHeadOver(e) {
  var evt = e || window.event;
  var ctgt = evt.currentTarget;
  ctgt.classList.add("overHead");
}

// Cross-browser compatible version of stopPropagation
function stopTheBuble(e) {
  var evt = e || window.event;
  evt.cancelBubble = true;
  evt.returnValue = false;
  if (evt.stopPropagation) evt.stopPropagation();
  if (evt.preventDefault) evt.preventDefault();   
  return false;
}
