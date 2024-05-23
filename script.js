function FormVisibility() {
	var input = document.getElementById('choice');
	var poll = document.getElementById('poll');
	var pay = document.getElementById('pay');
	var generator = document.getElementById('generator');
	document.getElementById('output').innerHTML = "";
	if(input.value == "Pollution"){
		poll.style.display = "block";
		pay.style.display = "none";
		generator.style.display = "none";
	} else if (input.value == "Pay") {
		poll.style.display = "none";
		pay.style.display = "block";
		generator.style.display = "none";
	} else if (input.value == "Generator") {
		poll.style.display = "none";
		pay.style.display = "none";
		generator.style.display = "block";
	} else {
		poll.style.display = "none";
		pay.style.display = "none";
		generator.style.display = "none";
	}
}
function Pollution(event) {
	event.preventDefault();
	const generatedPower = parseFloat(document.getElementById("generatedPower").value);
	const powerGeneration = parseFloat(document.getElementById("powerGeneration").value);
	const pollutionRate = parseFloat(document.getElementById("pollutionRate").value);
	const targetIndex = parseFloat(document.getElementById("targetIndex").value);
	var hToTarget = (targetIndex * (generatedPower * 1000)) / ((pollutionRate * powerGeneration) - (targetIndex * powerGeneration))/4;
	var dToTarget = hToTarget/24;
	document.getElementById('output').innerHTML = "<table><tr><td>Hours to target: </td><td>" + hToTarget.toFixed(2) + "</td></tr><tr><td>Days to target: </td><td>" + dToTarget.toFixed(2) + "</td></tr></table>";
}
function Payoff(event){
	event.preventDefault();
	const plantCost = parseFloat(document.getElementById("plantCost").value);
	const energyProduction = parseFloat(document.getElementById("energyProduction").value);
	const energyPrice = parseFloat(document.getElementById("energyPrice").value);
	const fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
	const fuelCost = parseFloat(document.getElementById("fuelCost").value);
	var hToPayOff = plantCost / (4 * (energyPrice * energyProduction - fuelConsumption * fuelCost * energyProduction));
	var dToPayOff = hToPayOff/24;
	document.getElementById('output').innerHTML = "<table><tr><td>Hours to pay off: </td><td>" + hToPayOff.toFixed(2) + "</td></tr><tr><td>Days to pay off: </td><td>" + dToPayOff.toFixed(2) + "</td></tr></table>";
}
function Generation(event){
	event.preventDefault();
	const generation = parseFloat(document.getElementById("generation"));
	const transformerLoss = parseFloat(document.getElementById("transformerLoss"));
	var hPower = generation * ((100 - transformerLoss) / 100);
	document.getElementById('output').innerHTML = "<table><tr><td>Hourly power generation: </td><td>" + hPower.toFixed(2) + "MWh</td></tr><tr><td>Daily power generation: </td><td>" + dPower.toFixed(2) + "MWh</td></tr></table>";
}