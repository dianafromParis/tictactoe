var squares = document.querySelectorAll(".small-square");
var counter = 0;


function fill(anElement){
  if (counter%2 == 0) {
    anElement.className = "small-square purple cross";
    counter+=1;
  } else {
    anElement.className = "small-square blue nought";
    counter+=1;
  }
}


function play(){
  for (var i = 0; i < squares.length; i++) {
    if (squares[i].className == "small-square") {
      squares[i].addEventListener("click", function() { fill(this);});
      console.log("counter "+ counter);
    } else {
      alert("Already filled !");
    }
  }//for
}


play();