// fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (firstResult) {
//     return firstResult.json()
// }).then(function(data){
//     console.log(data)
// })

fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


const currencyFrom = document.getElementById('currency-from');
const currencyTo = document.getElementById('currency-to');
const amount = document.getElementById('amount');
const convertButton = document.getElementById('convert');
const result = document.getElementById('result');

async function convertCurrency() {
  const from = currencyFrom.value;
  const to = currencyTo.value;
  const value = amount.value;
  
  const URL = `https://api.exchangerate-api.com/v4/latest/${from}`;
  await fetch(URL)
    .then(response => response.json())
    .then(data => {
      const rate = data.rates[to];
      result.value = (value * rate).toFixed(2);
    })
    .catch(error => {
      console.log('An error occurred:', error);
    });
}

convertButton.addEventListener('click', convertCurrency);