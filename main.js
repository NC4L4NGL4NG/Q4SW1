function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  const result = document.getElementById("result");

  // Check for valid inputs
  if (isNaN(weight) || isNaN(height) || height <= 0) {
    result.textContent = "Please enter valid values.";
    return;
  }

  // If height is in centimeters, convert it to meters
  if (height > 10) {
    height = height / 100; // Convert centimeters to meters
  }

  // Calculate BMI
  const bmi = weight / (height * height);

  // Determine category based on BMI
  let category = "";
  if (bmi < 18.5) category = "Underweight";
  else if (bmi >= 18.5 && bmi <= 24.9) category = "Normal weight";
  else if (bmi >= 25 && bmi <= 29.9) category = "Overweight";
  else if (bmi >= 30) category = "Obese";

  // Display the result
  result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}
