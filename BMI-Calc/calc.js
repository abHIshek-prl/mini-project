const wig = document.getElementById("kg");
const hei = document.getElementById("cm");
const press = document.getElementById("btn");
const out = document.getElementById("result");
press.addEventListener("click", function () {

    const weight = parseFloat(wig.value);
    const height = parseFloat(hei.value) / 100;

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        out.innerHTML = "Please enter valid inputs.";
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    out.innerHTML = `Your BMI is ${bmi} (${category})`;
});
