 'use strict';
const inputData = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82} ];

// variable to keep track of number of overwight persanalities
let overWeight = 0;
function calBMI(){
   // Calculating BMI upto first decimal
    this.bmi = Math.round(10*10000*this.WeightKg/(this.HeightCm*this.HeightCm))/10;   
   // finding BMI contaned interval and updating BMI Category and Health Risk
   if(this.bmi<=18.4){
       this.bmiCategory = "Under Weight";
       this.healthRisk = "Malnutrition risk";
    }else if(this.bmi<=24.9){
       this.bmiCategory = "Normal Weight";
       this.healthRisk = "Low risk";  
    }else if(this.bmi <= 29.9){
       this.bmiCategory = "Over Weight";
       this.healthRisk = "Enhanced risk";
       overWeight=overWeight+1;
    }else if(this.bmi <= 34.9){
       this.bmiCategory = "Moderatly Obese";
       this.healthRisk = "Medium risk";
       overWeight=overWeight+1;
    }else if(this.bmi <= 39.9){
        this.bmiCategory = "Severly Obese";
        this.healthRisk = "High risk";
        overWeight=overWeight+1;
    }else{ 
        this.bmiCategory = "Very Severly Obese"  ;
        this.healthRisk = "Very high risk";
        overWeight=overWeight+1;
    }  
}

//Population BMI Calculation  
for(let person of inputData ){
    // if either hight or weight not a positive interger updater bmi, bmiCategory, healthRisk to udefined-
    //- else update by calculated values     
    if(person["HeightCm"]<=0||person["WeightKg"]<=0){
        person.bmi = "undefined";
        person.bmiCategory = "undefined";
        person.healthRisk = "undefined"; 
    }
    else{
      
       // using call method to make calBMI method native to earch 'person'object, 
       //-, so data members can be accessed and new members can be added
       calBMI.call(person);
    }
    console.log(person);
}


//

