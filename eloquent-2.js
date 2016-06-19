// LOOPING A TRIANGLE

var triangle = "";
  for(i = 0; i<=6; i++){
  triangle += "#"
    console.log(triangle)
}

// Fizz Buzz

for (var i = 1; i <= 100; i++) {
  if (i % 3 == 0) {
  console.log("Fizz");
   }
  if (i % 5 == 0) {
  console.log ("Buzz");
  }
  if (i%3==0 && i%5==0) {
  console.log ("FizzBuzz");
  }
    if (i % 3!==0 && i%5!==0) {
  console.log (i)
 }
}

// Chess Board

    var board = 8;
for (var i = 0; i < size; i++) {
  var line = "";
  for (var j = 0; j < size; j++) {
    var total = i + j;
    if (total % 2 == 0) { 
      line += '#';
    } else {
      line += ' ';
    }
  }
  console.log(line);
}