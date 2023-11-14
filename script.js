const btn = document.getElementById("submit_button");

btn.addEventListener('click', function(){

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

    if(height == '' || weight == ''){
        alert(" Please fill out the input fields!");

        return;

    }

    //BMI = weight in kg / (height in m * height in m)

    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);

    document.querySelector('#results').innerHTML = BMI;


    let comment = " ";

    if(BMI < 18.5){
        comment = "Underweight";
    }
    if(BMI >= 18.5 && BMI < 25){
        comment = "Healthy";
    }
    if(BMI >= 25 && BMI < 30){
        comment = "Overweight";
    }
    if(BMI > 30){
        comment = "Obese";
    }
    
    document.querySelector(".comment").innerHTML = `You are <span id="feedback"><b>${comment}</b></span>`;
});