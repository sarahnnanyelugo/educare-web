import React, { useState } from "react";
import { rates } from "../../../TestData";
const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convertCurrency = () => {
    //   fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    const conversionRate = rates[toCurrency];
    setConvertedAmount(amount * conversionRate);
    //     })
    //     .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
      >
        <option value="NGN">NGN</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
      >
        <option value="EUR">EUR</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
      </select>
      <button onClick={convertCurrency}>Convert</button>
      <p>Converted Amount: {convertedAmount}</p>
    </div>
  );
};

export default CurrencyConverter;
