function displayValue(val){
    document.getElementById("display").value += val;
}

function clearDisplay(){
    document.getElementById("display").value = "";
}

function calculate(){
  try {
    document.getElementById("display").value =
      eval(document.getElementById("display").value);
  } catch {
    document.getElementById("display").value = "Error";
  }

/* 
    var userInput = document.getElementById("display").value;
    var result = eval(userInput);

    document.getElementById("display").value = result; */
}