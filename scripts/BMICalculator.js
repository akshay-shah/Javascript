function calculateBMI(weight, height) {
  var bmi = weight / (height * height);
  if (bmi < 18.5) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal");
  } else if (bmi > 24.9) {
    console.log("Overweight");
  }
}


calculateBMI(60,2);
calculateBMI(100,2);
calculateBMI(130,3);
calculateBMI(200,2);
calculateBMI(80,2);

