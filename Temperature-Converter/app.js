const celsiusInput = document.getElementById("celsius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const tempInputs = document.querySelectorAll("input")

tempInputs.forEach(input=>{
    input.addEventListener("input",(e)=>{
        let tempValue = parseInt(e.target.value)
        let inputName = e.target.name

        if(e.target.value === ""){
            celsiusInput.value=null
            fahrenheitInput.value=null
            kelvinInput.value=null
            return
        }
        if(inputName === "celsius"){
            // c->f
            let fahrenheit = tempValue *1.8 +32
            fahrenheitInput.value = fahrenheit.toFixed(2)

            // c -> k
            let kelvin = tempValue + 273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "fahrenheit"){
            //f -> c
            let celsius = (tempValue-32)/1.8
            celsiusInput.value = celsius.toFixed(2)

            // f -> k
            let kelvin = (tempValue-32)/1.8+273
            kelvinInput.value = kelvin.toFixed(2)
        }else if(inputName === "kelvin"){
            //k ->c
            let celsius = tempValue-273
            celsiusInput.value = celsius.toFixed(2)

            //k->f
            let fahrenheit = (tempValue-273)*1.8+32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})