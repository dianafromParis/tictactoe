//small squares
var squares = document.querySelectorAll(".small-square");

//string variables
var cross = "small-square purple cross";
var nought = "small-square blue nought";

// o
var crosses =  document.getElementsByClassName(cross);
// x
var noughts =  document.getElementsByClassName(nought);
var counter = 1;


//let's check the browser console
function displayMsg() {
  console.log("counter = "+ counter);
  console.log("crosses : "+ crosses.length + " | noughts : "+ noughts.length);
  console.log("squares : "+ squares.length);
}


function fill(anElement) {
  if ((anElement.className != cross) && (anElement.className != nought)) {
      if(counter%2 == 0) {
        anElement.className = cross;
      } else {
        anElement.className = nought;
      }
        displayMsg();
        console.log("className : "+ anElement.className);
  } else {
    alert("already filled !");
    console.log("already filled !");
  }
}


function play(){
  for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener("click", function() {
        fill(this);
        counter+=1;
      });
  }//for
}


play();