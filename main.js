function checkConsumption(){
    let kilowatt = Number(document.getElementById("watt").value);

    if (kilowatt >= 0 && kilowatt <= 100){
        window.alert ("Average consumption: Discounted Electricity Rates.");
    }
    else if (kilowatt >= 101 && kilowatt <= 200){
        window.alert ("Average consumption: Normal Residential Rate.");
    }
    else if (kilowatt >= 201 && kilowatt <= 300){
        window.alert ("Average consumption: Typical Electricity Usage.");
    }
    else if (kilowatt >= 301 && kilowatt <= 500){
        window.alert ("Average consumption: Higher Electricity Usage.");
    }
    else if (kilowatt > 500){
        window.alert ("Average consumption: Heavy Electric Users.");
    }
    else {
        window.alert ("Average consumption: Please input a non-negative number.");
    }
}
