const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let weight = document.getElementById("weight").value
    let height = document.getElementById("height").value

    if(weight === "" || isNaN(weight)){
        return result.innerHTML = "Please enter the weight"
    }else if(height === "" || isNaN(height)){
        return result.innerHTML = "Please enter the height"
    }else{
        height = height/100
        let bmi = (weight/Math.pow(height,2)).toFixed(2)

        if(bmi<18.5){
            showResult(bmi,"(Too Thin)","#0d6efd")
        }else if(bmi>=18.5 && bmi<=24.9){
            showResult(bmi,"(Normal)","#198754")
        }else if(bmi>=25 && bmi<=29.9){
            showResult(bmi,"(Fat)","#ffc107")
        }else{
            showResult(bmi,"(Too Fat)","#dc3545")
        }
    }
})

function showResult(bmi,message,color){
    result.style.backgroundColor = color
    return result.innerHTML = `${bmi} ${message}`
}