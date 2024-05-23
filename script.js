function FormVisibility() {
    var input = document.getElementById('choice');
    var poll = document.getElementById('poll');
    var pay = document.getElementById('pay');
    document.getElementById('output').innerHTML = "";
    if(input.value == "Pollution"){
        poll.style.display = "block";
        pay.style.display = "none";
    } else if (input.value == "Pay") {
        poll.style.display = "none";
        pay.style.display = "block";
    } else {
        poll.style.display = "none";
        pay.style.display = "none";
    }
}
function Pollution(event) {
    event.preventDefault();
    var generatedPower = parseFloat(document.getElementById("generatedPower").value);
    var powerGeneration = parseFloat(document.getElementById("powerGeneration").value);
    var pollutionRate = parseFloat(document.getElementById("pollutionRate").value);
    var targetIndex = parseFloat(document.getElementById("targetIndex").value);
    var hToTarget = Math.round(((targetIndex * (generatedPower * 1000)) / ((pollutionRate * powerGeneration) - (targetIndex * powerGeneration))/4)*100)/100;
    var dToTarget = Math.round((hToTarget/24)*100)/100;
    document.getElementById('output').innerHTML = "<table><tr><td>Hours to target: </td><td>" + hToTarget + "</td></tr><tr><td>Days to target: </td><td>" + dToTarget + "</td></tr></table>";
}
function Payoff(event){
    event.preventDefault();
    var plantCost = parseFloat(document.getElementById("plantCost").value);
    var energyProduction = parseFloat(document.getElementById("energyProduction").value);
    var energyPrice = parseFloat(document.getElementById("energyPrice").value);
    var fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
    var fuelCost = parseFloat(document.getElementById("fuelCost").value);
    var hToPayOff = Math.round(plantCost / (4 * (energyPrice * energyProduction - fuelConsumption * fuelCost * energyProduction)))/100;
    var dToPayOff = Math.round(hToPayOff/24*100)/100
    document.getElementById('output').innerHTML = "<table><tr><td>Hours to pay off: </td><td>" + hToPayOff + "</td></tr><tr><td>Days to pay off: </td><td>" + dToPayOff + "</td></tr></table>";
}