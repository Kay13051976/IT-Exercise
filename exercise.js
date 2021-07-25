function cToF(celsius) {
  var cTemp = celsius;
  var cToFahr = (cTemp * 9) / 5 + 32;
  var message = cTemp + "\xb0C is " + cToFahr + "\xb0F";
  console.log(message);
}
cToF(30);

function fToc(fahrenheit) {
  var fTemp = fahrenheit;
  var fToCel = ((fTemp - 32) * 5) / 9;
  var message = fTemp + "\xb0F is " + fToCel + "\xb0C";
  console.log(messages);
}
fToc(86);
