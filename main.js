// Funcion para el calculo celcisu kelvin.
function calcularTempCelsiusKelvin(tempCelsius){
    return String(Number(tempCelsius) + 273.15)
}

// Funcion para el calculo celcius fahrenheit
function calcularTempCelsiusFahrenheit(tempCelsius){
    return String( Number(tempCelsius) * 1.8 + 32 )
}

// Calcular y mostrar Resultado a display
const input = document.getElementById("input_temperatura")
const resultadoK = document.querySelector(".resultadoK")
const resultadoF = document.querySelector(".resultadoF")

function domCalculayMuestra(){
    const gradosCelcius = input.value
    const celsiusAKelvin = calcularTempCelsiusKelvin(gradosCelcius)
    const celsiusAFahrenheit = calcularTempCelsiusFahrenheit(gradosCelcius)

    resultadoK.innerText = `${celsiusAKelvin} °K`
    resultadoF.innerText = `${celsiusAFahrenheit} °F`
}

input.addEventListener("input", domCalculayMuestra)
