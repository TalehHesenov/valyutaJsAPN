const amountInput = document.querySelector("#amount");
const fristOption = document.querySelector("#fristCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resutInput = document.querySelector("#result");


const currency = new Currency();

runEventListeners();


function runEventListeners() {

    amountInput.addEventListener("input",exchange);
}


function exchange() {
    const amount = Number(amountInput.value.trim());
    const fristOptionValue = fristOption.options[fristOption.selectedIndex].textContent;
    const secondOptionValue = secondOption.options[secondOption.selectedIndex].textContent;
    

    currency.exchange(amount,fristOptionValue,secondOptionValue)
    .then((result)=>{
        resutInput.value = result.toFixed(3);
    })
}