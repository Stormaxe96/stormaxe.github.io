const apiEndpoint = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,binancecoin,cardano';

const cryptos = document.querySelectorAll('.crypto');

async function getCryptoPrices() {
  const response = await fetch(apiEndpoint);
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    const crypto = data[i];
    const price = crypto.current_price;
    cryptos[i].querySelector('.crypto-price').textContent = `$${price}`;
  }
}

getCryptoPrices();
setInterval(getCryptoPrices, 5000);
