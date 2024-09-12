function convertTemperature() {
    const tempInput = document.getElementById('temp-input').value;
    const fromUnit = document.getElementById('from-unit').value;
    const toUnit = document.getElementById('to-unit').value;
    const resultElement = document.getElementById('result');

    let convertedTemp;

    // Check if input is valid
    if (tempInput === '') {
        resultElement.textContent = 'Please enter a temperature value!';
        return;
    }

    // Convert the temperature based on the selected units
    if (fromUnit === toUnit) {
        convertedTemp = parseFloat(tempInput); // No conversion needed if both units are the same
    } else if (fromUnit === 'celsius') {
        if (toUnit === 'fahrenheit') {
            convertedTemp = (parseFloat(tempInput) * 9/5) + 32;
        } else if (toUnit === 'kelvin') {
            convertedTemp = parseFloat(tempInput) + 273.15;
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemp = (parseFloat(tempInput) - 32) * 5/9;
        } else if (toUnit === 'kelvin') {
            convertedTemp = ((parseFloat(tempInput) - 32) * 5/9) + 273.15;
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemp = parseFloat(tempInput) - 273.15;
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = (parseFloat(tempInput) - 273.15) * 9/5 + 32;
        }
    }

    resultElement.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)} °${toUnit.charAt(0).toUpperCase()}`;
}
