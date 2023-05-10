function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

const BMI = weight / Math.pow(height*0.01,2);
let message;
let message2;
if (BMI<=18.5){
  message = `Under Weight`;
  }
  else if ( BMI > 18.5 && BMI <= 24.9) { 
    message = `Healthy Weight`; 
  }
    else if (BMI>=25 && BMI<= 29.9) {
      message = `Over Weight`;
    } else {
      message = `Obesity`
    }

  if (age >= 19 && age <=24 ){
    message2 = `Your Normal BMI is 19-24`;
    }
    else if ( age >= 25 && age <= 34) { 
      message2 = `Your Normal BMI is 20-25`; 
    }
      else if (age >= 35 && age <= 44) {
        message2 = `Your Normal BMI is 21-26`;
      } else if(age >= 45 && age <= 54) {
        message2 = `Your Normal BMI is 22-27`
      } else {
        message2 = `Your Normal BMI is 23-28`
      }
      alert(BMI + "" + message + "" + message2);
      
  
}
