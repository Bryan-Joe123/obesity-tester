function wa() {
  var w = document.getElementById("weight").value;
  var h = (document.getElementById("height").value)/100;
  bmi=w/(h*h)

  document.getElementById("info").innerHTML="Underweight = less than 18.5 <br> Normal weight = 18.5–24.9 <br> Overweight = 25–29.9 <br> Obesity = 30 or greater"

  document.getElementById("display").innerHTML="BMI="+roundNumber(bmi,2);
  if(bmi<18.5){
    document.getElementById("result").innerHTML="Underweight!";
  }else if(bmi>=18.5&&bmi<=24.9){
    document.getElementById("result").innerHTML="Normalweight!";
  }else if(bmi>24.9&&bmi<30){
    document.getElementById("result").innerHTML="Overweight!";
  }else if(bmi>=30){
    document.getElementById("result").innerHTML="You have Obesity!!!";
  }
  /*
          Underweight = less than 18.5 <br>
          Normal weight = 18.5–24.9 <br>
          Overweight = 25–29.9 <br>
          Obesity = 30 or greater*/
}

function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}