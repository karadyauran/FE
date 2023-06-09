const currentTime = new Date();

const updatedElement = document.getElementById("updated");
updatedElement.textContent = `Обновлено ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`

function fetchExchangeRate(baseCurrency, targetCurrency, id) {
    const apiKey = '9e83e7ef62649af754f151d4';
    const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${baseCurrency}`;


    function updateExchangeRate() {
        // Отправка GET-запроса к API
        const exchangeRateElement = document.getElementById(id);
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const exchangeRate = data.conversion_rates[targetCurrency];
                exchangeRateElement.textContent = `${exchangeRate} ${targetCurrency}`;
            })
            .catch(error => {
                exchangeRateElement.textContent = `No info`;
            });
    }

    setInterval(() => {
        const currentTime = new Date();
        updatedElement.textContent = `Обновлено ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
        updateExchangeRate();
    }, 5000);

    updateExchangeRate();
}


fetchExchangeRate('USD', 'EUR', 'USD-EUR');
fetchExchangeRate('GBP', 'EUR', 'GBP-EUR');
fetchExchangeRate('JPY', 'EUR', 'JPY-EUR');
fetchExchangeRate('GEL', 'EUR', 'GEL-EUR');