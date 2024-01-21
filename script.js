var element = "";
let id = "";
function clicked(e) {
  element = "";
  console.log(e.id);
  id = e.id;
}
function click1(a) {
  element = element + a;
  document.getElementById(id).value = element;
}

function clear1() {
  element = "";
  document.getElementById(id).value = element;
}
function backspace() {
  element = element.slice(0, element.length - 1);
  document.getElementById(id).value = element;
}
function calculate() {
  let val1 = +document.querySelector("#t2").value;
  let val2 = +document.querySelector("#t3").value;
  let bmi = 0;
  bmi = val1 / (val2 * val2);
  bmi = bmi.toPrecision(4);
  document.getElementById("t1").value = bmi;
  
  console.log(bmi);
  const chart =document.getElementById('chart')
  console.log(chart);
  if(bmi<15){
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "Very severely underweight"
  }
  else if(bmi<15){
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "Very severely underweight"
  }
  else if(bmi>=15 && bmi<= 16){
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "Severely underweight"
  }
  else if(bmi>16 && bmi<18.5){
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "Underweight"
  }
  else if(bmi>=18.5 && bmi<=25){
    chart.style.backgroundColor = "#80ff80"
    chart.innerHTML = "Normal (healthy weight)"
  }
  else if(bmi>25 && bmi<30){
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "	Overweight"
  }
  else if(bmi>=30 && bmi<35){
    chart.style.backgroundColor = "#FF4040"
    chart.innerText = "Moderately obese"
  }
  else if(bmi>=35 && bmi<=40){
    chart.style.backgroundColor = "#FF4040"
    chart.innerText = "Severely obese"
  }
  else if(bmi>40){
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "Very severely obese"
  }
  else{
    chart.style.backgroundColor = "#FFB04B"
    chart.innerText = "Very severely obese"
  }
 
}
