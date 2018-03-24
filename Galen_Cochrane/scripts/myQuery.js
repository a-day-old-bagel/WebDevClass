/*
 * Galen Cochrane
 * March 20 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 7 - Part II
 * Purpose: This script explores JQuery.
 */
 "use strict";

// Use JQuery to assign functions to button presses
$(document).ready(function () {
    // Change Span
    $("#btnChangeSpan").click(function () {
        $("#spnOne").text("New Text for the Span");
    });
    // Append to Span
    $("#btnAppendToSpan").click(function () {
        $("#spnOne").append(" == Text at the back");
    });
    // Prepend to Span
    $("#btnPrependToSpan").click(function () {
        $("#spnOne").prepend("Text at the front -- ");
    });
    // Add Text Before Span
    $("#btnBeforeSpan").click(function () {
        $("#spnOne").before("Text Before ++ ");
    });
    // Add Text After Span
    $("#btnAfterSpan").click(function () {
        $("#spnOne").after(" @@ Text After");
    });
    // Show Span Text
    $("#btnShowSpan").click(function () {
        alert($("#spnOne").text());
    });
    // Number Paragraphs
    $("#btnNumberPs").click(function () {
        var pList = $("#divNumbers p");
        for (var i = 0; i < pList.length; ++i) {
          pList.eq(i).prepend(i + 1 + ". ");
        }
    });
    // Change Paragraphs to Successes
    $("#btnClassPSuccess").click(function () {
        $("#divClass p").addClass("success");
    });
    // Change Paragraphs to Errors
    $("#btnClassPError").click(function () {
        var pList = $("#divClass p");
        for (var i = 0; i < pList.length; i += 2) {
          pList.eq(i).removeClass("success").addClass("error");
        }
    });
    // Change Paragraphs to Warnings
    $("#btnClassPWarning").click(function () {
        $("#divClass p").removeClass().addClass("warning");
    });
    // Add Last Names
    $("#btnAddLastNames").click(function () {
        var barneyFirst = $("span.bff");
        var fredFirst = barneyFirst.prev();
        var dinoFirst = barneyFirst.next();
        fredFirst.append($("<strong></strong>").text("Flintstone"));
        barneyFirst.append($("<em></em>").text("Rubble"));
        dinoFirst.append($("<del></del>").text("the Dinosaur"));
    });
    // Remove the Larry LI
    $("#btnRemoveLarry").click(function () {
        $("li.first").remove();
    });
    // Clear the Curly LI
    $("#btnClearCurly").click(function () {
        $("li.second").empty();
    });
    // Remove Moe's Last Name
    $("#btnRemoveMoeLastName").click(function () {
        $("li.third span").remove();
    });
    // Remove Shemp's Last Name (?):
    // I found the instructions for this function to be very unclear,
    // so I accomplished what I thought was intended.
    // What does it mean to "go to" an li? And there is no span element
    // holding Larry's last name in Curly's LI, much less if by "Curly's
    // LI" you really mean Moe's LI, or whatever "starting in" meant.
    // "I" have no location in this process, so these prepositions lack context.
    $("#btnRemoveShempLastName").click(function () {
        $("li.third").next().find("span").remove();
    });
    // Change Text (?):
    // Again, the instructions for this function contained contextless preposition.
    // I did what I thought was best.
    $("#btnChangeText").click(function () {
        $("#spnTwo").parent().next().children().eq(1).text("I was Changed.");
    });
    // Toggle Paragraphs
    $("#btnTogglePs").click(function () {
        this.allPsHidden = !this.allPsHidden; // undefined implies false
        if (this.allPsHidden === true) {
          $("p").hide();
          $("#btnTogglePs").text("Show All Ps");
        } else {
          $("p").show();
          $("#btnTogglePs").text("Hide All Ps");
        }
    });
});