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
	if(document.getElementById("generatedPower").value != "" && document.getElementById("powerGeneration").value != "" && document.getElementById("pollutionRate").value != "" && document.getElementById("targetIndex").value != ""){
		const generatedPower = parseFloat(document.getElementById("generatedPower").value);
		const powerGeneration = parseFloat(document.getElementById("powerGeneration").value);
		const pollutionRate = parseFloat(document.getElementById("pollutionRate").value);
		const targetIndex = parseFloat(document.getElementById("targetIndex").value);
		var hToTarget = (targetIndex * (generatedPower * 1000)) / ((pollutionRate * powerGeneration) - (targetIndex * powerGeneration))/4;
		var dToTarget = hToTarget/24;
		document.getElementById('output').innerHTML = "<table><tr><td>Hours to target: </td><td>" + hToTarget.toFixed(2) + "</td></tr><tr><td>Days to target: </td><td>" + dToTarget.toFixed(2) + "</td></tr></table>";
	}
}
function Payoff(event){
	event.preventDefault();
	if(document.getElementById("plantCost").value != "" && document.getElementById("energyProduction").value != "" && document.getElementById("energyPrice").value != "" && document.getElementById("fuelConsumption").value != "" && document.getElementById("fuelCost").value != ""){
		const plantCost = parseFloat(document.getElementById("plantCost").value);
		const energyProduction = parseFloat(document.getElementById("energyProduction").value);
		const energyPrice = parseFloat(document.getElementById("energyPrice").value);
		const fuelConsumption = parseFloat(document.getElementById("fuelConsumption").value);
		const fuelCost = parseFloat(document.getElementById("fuelCost").value);
		var hToPayOff = plantCost / (4 * (energyPrice * energyProduction - fuelConsumption * fuelCost * energyProduction));
		var dToPayOff = hToPayOff/24;
		document.getElementById('output').innerHTML = "<table><tr><td>Hours to pay off: </td><td>" + hToPayOff.toFixed(2) + "</td></tr><tr><td>Days to pay off: </td><td>" + dToPayOff.toFixed(2) + "</td></tr></table>";
	}
}
function Generation(event){
	event.preventDefault();
	if(document.getElementById("generation").value != "" && document.getElementById("transformerLoss").value != ""){
		const generation = parseFloat(document.getElementById("generation").value);
		const transformerLoss = parseFloat(document.getElementById("transformerLoss").value);
		const hGen = (generation * (1 - transformerLoss / 100)) * 4;
		const hPower = formulateUnits(hGen,"power");
		const tPower = formulateUnits((hGen * 12),"power");
		const dPower = formulateUnits((hGen * 24),"power");
		const hHydro = formulateUnits((hGen / 3.03),"hydrogen");
		const tHydro = formulateUnits((hGen * 12 / 3.03),"hydrogen");
		const dHydro = formulateUnits((hGen * 24 / 3.03),"hydrogen");
		document.getElementById('output').innerHTML = "<table><tr><td><table><tr><td>Hourly Power Generation: </td><td>" + hPower[0].toFixed(2) + " " + hPower[1] + "</td></tr><tr><td>Full Tank Generation(12h): </td><td>" + tPower[0].toFixed(2) + " " + tPower[1] + "</td></tr><tr><td>Daily Power Generation: </td><td>" + dPower[0].toFixed(2) + " " + dPower[1] + "</td></tr></table></td><td><table><tr><td>Hourly Hydrogen Generation: </td><td>" + hHydro[0].toFixed(2) + " " + hHydro[1] + "</td></tr><tr><td>Full Tank Generation(12h): </td><td>" + tHydro[0].toFixed(2) + " " + tHydro[1] + "</td></tr><tr><td>Daily Hydrogen Generation: </td><td>" + dHydro[0].toFixed(2) + " " + dHydro[1] + "</td></tr></table></td></tr></table>";
	}
}
function formulateUnits(power, mode){
	switch (mode) {
		case "power":
			if(power >= 1000){
				var unit = "GWh";
				power /= 1000;
			} else {
				var unit = "MWh";
			}
			break;
		case "hydrogen":
			if(power >= 1000){
				var unit = "t";
				power /= 1000;
			} else {
				var unit = "kg";
			}
			break;
		default:
			break;
	}
	return [power, unit];
}