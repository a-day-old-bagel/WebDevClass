alert("The script in the header has run");
var loadLast = "I loaded last";
var numArray;

if (numArray === undefined) {
  numArray = [];
  if (numArray === undefined) {
    alert("Array 'numArray' could not be defined!");
  }
  numArray.push(34);
  numArray.push(5.5);
  numArray.push(33.5);
  numArray.push(46.5);
  numArray.push(59);
  numArray.push(64);
  numArray.push(43);
  numArray.push(64);
  numArray.push(48);
  numArray.push(49);
  numArray.push(40);
  numArray.push(59);
  numArray.push(44);
  numArray.push(54);
  numArray.push(19.5);
  numArray.push(25);
  numArray.push(69);
  numArray.push(23);
}

function getAvg() {
  var sum = 0;
  for (var i = 0; i < numArray.length; ++i) {
    sum += numArray[i];
  }
  return sum / numArray.length;
}

alert(getAvg());

function getName() {
  return "Galen";
}