var tablespoonsToCups = function() {
  cups = parseInt(prompt("Enter Cup amount"));
  alert((cups * 16) + " is the amount of Tablespoons you will need.");
};

// tablespoonsToCups();

var litersToCups = function() {
  liters = parseInt(prompt("Enter in Liters"));
  return liters;
  alert(liters + " liters = " + (liters * 4.22675) + " cups.");
};

// litersToCups();

var cupsToPints = function(cups) {
  pints = cups * 2;
  alert(pints);
};

// cupsToPints(4);

var poundsToGrams = function() {
  pounds = parseInt(prompt("Enter the amount of pounds you have"));
  alert((pounds * 453.592) + " is how many grams you have");
};

//poundsToGrams();

var add = function(number1, number2) {
  return number1 + number2;
};

var pecksToBushels = function(peck) {
  return peck * .25;
};

bushels = pecksToBushels(2);

alert(bushels);
