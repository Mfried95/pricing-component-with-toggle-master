const toggle = document.querySelector(".toggle-btn")
const toggleOff = document.querySelector(".toggle-btn")


let basicCost = document.getElementById("basic-pricing")
let proCost = document.getElementById("pro-pricing")
let masterCost = document.getElementById("master-pricing")

function renderOg(){
        basicCost.innerText = "$199.99"
        proCost.innerText = "$249.99"
        masterCost.innerText = "$399.99"
}


toggle.addEventListener("click", function(){
    if (toggle.classList.toggle("active")){
        basicCost.innerText = "$19.99"
        proCost.innerText = "$24.99"
        masterCost.innerText = "$39.99"
    } else {
        toggle.classList.remove("active")
        renderOg()
    }
})

