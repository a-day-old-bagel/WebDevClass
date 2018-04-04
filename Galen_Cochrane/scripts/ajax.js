/*
 * Galen Cochrane
 * April 01 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 8
 * Purpose: This script explores AJAX and JSON.
 */
 "use strict";

var books;
var people;

$(document).ready(function () {
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "data/books.json",
    success: function(data) {
      books = data;
    }
  });
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "data/people.json",
    success: function(data) {
      people = data;
    }
  });
});

$(document).on("click", "#btnSearchBooks", function(){
  searchBooks($("#txtSearchBooks").val());
});
$(document).on("keyup", "#txtSearchPeople", function(){
  searchPeople($("#txtSearchPeople").val());
});

function searchBooks(searchTerm) {
  $("#tabBooks tbody tr").remove();
  var tBody = $("#tabBooks tbody");
  if (searchTerm === "") {
    for (var i in books) {
      showBookInTable(tBody, i);
    }
  } else {
    for (var i in books) {
      if (searchTermMatchesBook(searchTerm, i)) {
        showBookInTable(tBody, i);
      }
    }
  }
}
function showBookInTable(tBody, index) {
  var tagList = '<ul><li>' + books[index].tags.join('</li><li>') + '</li></ul>';
  tBody.append($("<tr>")
    .addClass((index % 2) ? "other" : "")
    .append($("<td>")
      .text(books[index].title))
    .append($("<td>")
      .text(books[index].isbn))
    .append($("<td>")
      .text(
        books[index].author.last + ", " +
        books[index].author.first + " " +
        books[index].author.middle
        ))
    .append($("<td>")
      .append(tagList)));
}
function searchTermMatchesBook(term, index) {
  var compactString = books[index].title +
                  books[index].isbn +
                  books[index].author.first +
                  books[index].author.middle +
                  books[index].author.last +
                  books[index].tags;
  return new RegExp(term.toUpperCase()).test(compactString.toUpperCase());
}
function searchPeople(searchTerm) {
  $("#ulPeople").empty();
  var list = $("#ulPeople");
  for (var i in people) {
    if (searchTermMatchesPerson(searchTerm, i)) {
      showPersonInList(list, i);
    }
  }
}
function showPersonInList(list, index) {
  var group = "group" + people[index].group.toString();
  list.append($("<li>")
    .addClass(group)
    .append($("<span>")
      .text(people[index].name))
    .append($("<span>")
      .text(people[index].age))
    .append($("<span>")
      .text(people[index].phone)));
}
function searchTermMatchesPerson(term, index) {
  var compactString = people[index].group +
                  people[index].name +
                  people[index].age +
                  people[index].phone;
  return new RegExp(term.toUpperCase()).test(compactString.toUpperCase());
}