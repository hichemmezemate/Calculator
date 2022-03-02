let displayNumber = document.getElementById("outputNumber");

let numberOne = document.getElementById('equals')

let inputNumber = document.getElementById('inputt')

let clearDisplay = document.getElementById('clear');

let delDisplay = document.getElementById('delete')

clearDisplay.addEventListener('click', clearData);

delDisplay.addEventListener('click', delData);

function clearData() {
    displayNumber.innerHTML = "<br>";
    inputNumber.value = null;
}

function delData() {
    inputNumber.value = inputNumber.value.slice(0, -1);
}

 
numberOne.addEventListener('click', displayer);


function displayer() {
    try{
        displayNumber.innerText = eval(inputNumber.value);
    }   catch{
        alert('insert valid math !!!')
        clearData()
    }
}

let myBtns = Array.from(document.getElementsByClassName("button"));

myBtns.map( button => {
    button.addEventListener('click', (e) => {
        inputNumber.value = inputNumber.value + e.target.innerText;
        console.log("clicked");
    })
});

