var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");



// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  
  // Create a <p> element
  var para = document.createElement("P");
  // Create a text node and enter what variable in loop you want printed to div
  var t = document.createTextNode(currentBand);
  // Append text (variable) to <p>
  para.appendChild(t);
  // Append para variable to bandElement because it will print it to the document by document.getElementBy Id??
  bandElement.appendChild(para);

// Repeat for second div
  var para2 = document.createElement("P");
  var t2 = document.createTextNode(currentVeggie);
  para2.appendChild(t2);
  veggieElement.appendChild(para2);


}