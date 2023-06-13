function convertCurrency() {

    const convertBtn = document.getElementById('convert-btn');
    const money = document.getElementById('money').value;
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;
    var convertedamount = document.getElementById('convertedamount');
  /*  
    const money = moneyInput.value;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    */
    const apiUrl = `https://api.apilayer.com/currency_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${money}`;
    var myHeaders = new Headers();
    myHeaders.append("apikey", "fyAOLbKMzON1A7LXEBoXzeBinQRXlUfW");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};
fetch(apiUrl, requestOptions)
  .then(response => response.json())
  .then(data => {
                var amount = data["result"];
                convertedamount.innerHTML = amount;
        })
  .catch(error => console.log('error', error));
}