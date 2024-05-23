document.addEventListener('DOMContentLoaded', function() {
	const formSelector = document.getElementById('choice');
	const formContainer = document.getElementById('formContainer');
	formSelector.addEventListener('change', function() {
		const selectedValue = formSelector.value;
		if(selectedValue != ""){
		const formFileName = `https://scp-055-0.github.io/EnergyManagerCalculators/${selectedValue}.html`;
		document.getElementById('output').innerHTML = formFileName;
		fetch(formFileName)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.text();
		})
		.then(data => {
			formContainer.innerHTML = data;
		})
		.catch(error => {
			console.error('There was a problem with the fetch operation:', error);
			formContainer.innerHTML = `<p style="color: red;">Failed to load form: ${error.message}</p>`;
		});
	}
	});
	formSelector.dispatchEvent(new Event('change'));

});