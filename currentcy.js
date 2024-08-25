class Currency{
    constructor(){
        this.url="https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eggkPNXqp4BWUbRptCmnutscZwpwwke0UKPkm0UB&base_currency=";
    
    
    }

    async exchange(amount,firstCurrency,secondCurrency){
      const response = await fetch(`${this.url}${firstCurrency}`)
      const result = await response.json();
     const exchangeResult = amount * result.data[secondCurrency];

      return exchangeResult;
    }
}