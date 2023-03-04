function bmi(){
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    var bmi = w / (h/100 * h/100);
    var total = bmi.toFixed(2);

    if(bmi < 18.6){
        result.innerHTML = 'Under weight : ' + total;
    }else if(bmi >= 18.6 && bmi < 24.9){
        result.innerHTML = 'Normal : ' + total;
    }else{
        result.innerHTML = 'Over Weight : ' + total;
    }

}
