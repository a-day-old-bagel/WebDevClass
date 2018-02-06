var greeting = prompt("Enter a greeting:");
if (greeting === null || greeting === "") {
  alert("You pressed cancel. Now what am I supposed to do?");
} else {
  alert(greeting + ", " + getName());
}
loadLast = "I really am last";