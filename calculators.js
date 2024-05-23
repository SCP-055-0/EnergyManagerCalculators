function Pollution(event) {
	event.preventDefault();
	var generatedPower = parseFloat(document.getElementById("generatedPower").value);
	var powerGeneration = parseFloat(document.getElementById("powerGeneration").value);
	var pollutionRate = parseFloat(document.getElementById("pollutionRate").value);
	var targetIndex = parseFloat(document.getElementById("targetIndex").value);
	var hToTarget = (targetIndex * (generatedPower * 1000)) / ((pollutionRate * powerGeneration) - (targetIndex * powerGeneration))/4;
	var dToTarget = (hToTarget/24);
	document.getElementById('output').innerHTML = "<table><tr><td>Hours to target: </td><td>" + hToTarget.toFixed(2) + "</td></tr><tr><td>Days to target: </td><td>" + dToTarget.toFixed(2) + "</td></tr></table>";
}
function Payoff(event){
	event.preventDefault();
	var plantCost = parseFloat(document.getElementById("plantCost").value);
	var energyProduction = parseFloat(document.getElementById("energyProduction").value);
	var energyPrice = parseFloat(document.getElementById("energyPrice").value);
	var fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
	var fuelCost = parseFloat(document.getElementById("fuelCost").value);
	var hToPayOff = plantCost / (4 * (energyPrice * energyProduction - fuelConsumption * fuelCost * energyProduction));
	var dToPayOff = hToPayOff/24;
	document.getElementById('output').innerHTML = "<table><tr><td>Hours to pay off: </td><td>" + hToPayOff.toFixed(2) + "</td></tr><tr><td>Days to pay off: </td><td>" + dToPayOff.toFixed(2) + "</td></tr></table>";
}