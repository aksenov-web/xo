var hod = 0;



let buttons = document.querySelectorAll('button');

buttons.forEach(button => {
button.addEventListener("click", function() {
  func1(button);
});
});


function func1(button) {
  if (hod%2 ==0) {
  button.textContent = "o";
  }
  else {
    button.textContent = "x";
    
  }
  hod++;
}

