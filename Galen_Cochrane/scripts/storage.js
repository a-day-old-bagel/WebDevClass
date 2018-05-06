/*
 * Galen Cochrane
 * April 18 2018
 * INFO 2220
 * Jon Holmes
 * Assignment 9
 * Purpose: This script explores web storage
 */
 "use strict";

var people = [];
var currentEditingIndex = -1;

function Person(name, age, phone, group) {
  this.name = name;
  this.age = age;
  this.phone = phone;
  this.group = group;
}

function showPersonInList(person, index) {
  var secondLineP = document.createElement("p");
  var thirdLineP = document.createElement("p");

  var nameSpan = document.createElement("span");
  nameSpan.classList.add("nameSpan");
  nameSpan.innerText = person.name;

  var ageSpan = document.createElement("span");
  ageSpan.innerText = "Age: " + person.age;
  secondLineP.appendChild(ageSpan);

  var groupSpan = document.createElement("span");
  groupSpan.innerText = "Group: " + person.group;
  secondLineP.appendChild(groupSpan);

  var phoneSpan = document.createElement("span");
  phoneSpan.innerText = "Phone: " + person.phone;
  thirdLineP.appendChild(phoneSpan);

  var newLi = document.createElement("li");
  newLi.classList.add("group" + person.group);
  var newDiv = document.createElement("div");

  if (document.getElementById("btnAddPerson")) {
    var newBtn = document.createElement("button");
    newBtn.innerText = "Edit";
    newBtn.onclick = function () {
      editPerson(index);
    }
    newLi.appendChild(newBtn);
  }

  newLi.appendChild(nameSpan);
  newLi.appendChild(secondLineP);
  newLi.appendChild(thirdLineP);
  newDiv.appendChild(newLi);
  document.getElementById("peopleList").appendChild(newDiv);
}

function writePeopleToLocalStorage() {
  localStorage.setItem("webStorageDemoPeopleArray", JSON.stringify(people));
}

function readPeopleFromLocalStorage() {
  if (localStorage.webStorageDemoPeopleArray) {
    people = JSON.parse(localStorage.getItem("webStorageDemoPeopleArray"));
    for (var i = 0; i < people.length; ++i) {
      showPersonInList(people[i], i);
    }
  }
}

window.onload = function () {
  if (document.getElementById("btnLogin")) {
    document.getElementById("btnLogin").onclick = onLogin;
  }
  if (document.getElementById("btnForget")) {
    document.getElementById("btnForget").onclick = onForget;
  }
  if (document.getElementById("btnAddPerson")) {
    document.getElementById("btnAddPerson").onclick = onAddPerson;
  }
  if (document.getElementById("btnClearList")) {
    document.getElementById("btnClearList").onclick = onClearList;
  }

  if (document.getElementById("inUserName") && localStorage.webStorageDemoUsername) {
    document.getElementById("inUserName").value = localStorage.getItem("webStorageDemoUsername");
  }
  if (localStorage.webStorageDemoPeopleArray) {
    people = localStorage.getItem("webStorageDemoPeopleArray");
  }

  readPeopleFromLocalStorage();
}

function onLogin() {
  var enteredUsername = document.getElementById("inUserName").value;
  var enteredPassword = document.getElementById("inPassword").value;
  if (enteredUsername === "tester" && enteredPassword === "tested") {
    alert("You logged in.");
    if (document.getElementById("chkRemember").checked) {
      localStorage.setItem("webStorageDemoUsername", enteredUsername);
    } else {
      localStorage.removeItem("webStorageDemoUsername");
    }
  } else {
    alert("Login failed.");
  }
  location.reload();
}

function onForget() {
  localStorage.removeItem("webStorageDemoUsername");
  location.reload();
}

function onAddPerson() {
  var enteredName = document.getElementById("inName").value;
  var enteredPhone = document.getElementById("inPhone").value;
  var enteredAge = document.getElementById("inAge").value;
  var selectedGroup = document.querySelector('input[name="group"]:checked').value;
  var newPerson = new Person(enteredName, enteredAge, enteredPhone, selectedGroup);
  if (currentEditingIndex != -1) {
    people[currentEditingIndex] = newPerson;
    writePeopleToLocalStorage();
    location.reload();
  } else {
    people.push(newPerson);
    showPersonInList(newPerson, people.length - 1);
    writePeopleToLocalStorage();
  }
}

function onClearList() {
  localStorage.removeItem("webStorageDemoPeopleArray");
  location.reload();
}

function editPerson(index) {
  document.getElementById("inName").value = people[index].name;
  document.getElementById("inPhone").value = people[index].phone;
  document.getElementById("inAge").value = people[index].age;
  var radios = document.getElementsByName('group');
  for (var i = 0, length = radios.length; i < length; i++) {
    if (i + 1 == people[index].group) {
      radios[i].checked = true;
    } else {
      radios[i].checked = false;
    }
  }
  currentEditingIndex = index;
  document.getElementById("btnAddPerson").innerText = "Save Changes";
}

function clearShownPeople() {
  var list = document.getElementById("peopleList");
  while (list.firstChild) {
      list.removeChild(list.firstChild);
  }
}
