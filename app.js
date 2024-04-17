const button = document.querySelector("#btn");

const currentFunction = () => {
  const amount = document.querySelector("#amount").value;
  const currency = document.querySelector("#currency").value;
  const h2 = document.querySelector("#result");

  fetch("https://api.exchangerate-api.com/v4/latest/AZN")
  .then((res) => res.json())
  .then((data) => {
    const rates = data.rates[currency]
    const result = amount * rates;
    h2.textContent = `${amount} AZN = ${result.toFixed(2)} ${currency}`;
  })
};

button.addEventListener("click", currentFunction);
