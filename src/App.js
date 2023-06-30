import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow'

const ACCESS_KEY = "OZF3Y30jeQ8cRrGQLHZ7atZC6Oc1QXPO"
// const BASE_URL = `https://api.apilayer.com/exchangerates_data/latest?access_key=${ACCESS_KEY}`
const BASE_URL = "https://api.apilayer.com/exchangerates_data/latest"

function App() {
  // const [currencyOptions, setCurrencyOptions] = useState([])
  // const [fromCurrency, setFromCurrency] = useState()
  // const [toCurrency, setToCurrency] = useState()
  // const [exchangeRate, setExchangeRate] = useState()
  // const [amount, setAmount] = useState(1)
  // const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  // let toAmount, fromAmount
  // if (amountInFromCurrency) {
  //   fromAmount = amount
  //   toAmount = amount * exchangeRate
  // } else {
  //   toAmount = amount
  //   fromAmount = amount / exchangeRate
  // }

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("apikey", "OZF3Y30jeQ8cRrGQLHZ7atZC6Oc1QXPO");
    
    // var requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow',
    //   headers: myHeaders
    // };
    
    fetch(BASE_URL, {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    })
      .then(res => res.json())
      .then(data => console.log(data)
        
        // setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        // setFromCurrency(data.base)
        // setToCurrency(firstCurrency)
        // setExchangeRate(data.rates[firstCurrency])
      )
  }, [])

  // useEffect(() => {
  //   if (fromCurrency != null && toCurrency != null) {
  //     fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
  //       .then(res => res.json())
  //       .then(data => setExchangeRate(data.rates[toCurrency]))
  //   }
  // }, [fromCurrency, toCurrency])

  // function handleFromAmountChange(e) {
  //   setAmount(e.target.value)
  //   setAmountInFromCurrency(true)
  // }

  // function handleToAmountChange(e) {
  //   setAmount(e.target.value)
  //   setAmountInFromCurrency(false)
  // }

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow
        // currencyOptions={currencyOptions}
        // selectedCurrency={fromCurrency}
        // onChangeCurrency={e => setFromCurrency(e.target.value)}
        // onChangeAmount={handleFromAmountChange}
        // amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        // currencyOptions={currencyOptions}
        // selectedCurrency={toCurrency}
        // onChangeCurrency={e => setToCurrency(e.target.value)}
        // onChangeAmount={handleToAmountChange}
        // amount={toAmount}
      />
    </>
  );
}

export default App;
