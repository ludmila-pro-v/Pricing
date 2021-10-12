// toggle

const priceChange = document.querySelector('.price__toggle');
const sale = 20;
const priceNumbers = document.querySelectorAll('.price__number');
let priceMonthly = [];
let priceAnnually = [];

for (let i = 0; i < priceNumbers.length; i++) {
  priceMonthly[i] = Number(priceNumbers[i].innerHTML);
  priceAnnually[i] = Math.round((priceMonthly[i] * 12) * (1 - sale / 100));
 
}

const getPriceAnnually = () => {
  for(j = 0; j < priceNumbers.length; j++) {
    priceNumbers[j].innerHTML = priceAnnually[j]
  }
};

const getPriseMonthly = () => {
  for(j = 0; j < priceNumbers.length; j++) {
    priceNumbers[j].innerHTML = priceMonthly[j]
  }
};

priceChange.addEventListener('click', () => {
  priceChange.classList.toggle('price__annually');
  if (priceChange.classList.contains('price__annually')) {
    getPriceAnnually();
  } else {
    getPriseMonthly();
  }
});

