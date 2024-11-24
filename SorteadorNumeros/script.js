const txtQuantityNumbers = document.getElementById("txtQuantityNumbers");
const txtRangeInitial = document.getElementById("txtRangeInitial");
const txtRangeFinal = document.getElementById("txtRangeFinal");
const btnSortNumber = document.getElementById("btnSortNumber");
const chkNotRepeatNumber = document.getElementById("chkNotRepeatNumber");

const $action = document.querySelector(".action");
const $results = document.querySelector(".results");

function onlyNumbers(e) {
    e.target.value = e.target.value.replace(/\D/g, "");
}

txtQuantityNumbers.addEventListener("input", (e) => onlyNumbers(e));
txtRangeInitial.addEventListener("input", (e) => onlyNumbers(e));
txtRangeFinal.addEventListener("input", (e) => onlyNumbers(e));

// pegar a quantidade que tenho que sortear
// pegar o range inicial e final que tenho que sortear.

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let result = {};
function generateRandomNumbers() {

    const initial = txtRangeInitial.value;
    const final = txtRangeFinal.value;


    for (let i=0; i < txtQuantityNumbers.value; i++) {
        
        if (chkNotRepeatNumber.checked) {

            if (i == 0) {
                result[i] = getRandomArbitrary(initial, final);
                continue;
            }

            let lastPosition = (i - 1) == -1 ? 0 : i - 1;
            
            result[i] = getRandomArbitrary(initial, final);

            if (result[i] == result[lastPosition])
                result[i] = getRandomArbitrary(initial, final);
        }
        else 
            result[i] = getRandomArbitrary(initial, final);   
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

btnSortNumber.addEventListener("click", async function() {

    if (!txtQuantityNumbers.value 
        || !txtRangeInitial.value 
        || !txtRangeFinal.value)
        return;

    generateRandomNumbers();

    $action.classList.add("hidden");
    $results.classList.remove("hidden");
    let auxiliar = document.querySelector(".random-numbers");

    for(let i=0; i < txtQuantityNumbers.value; i++) {
        auxiliar.insertAdjacentHTML("beforeend", `<div class="random-number">${result[i]}</div>`);
        await delay(2000);
    }

});

