export default class rateCheck {  
  static async getRates(country1,country2,amount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${country1}/${country2}/${amount}`);
      if (!response.ok || response.result == "error") {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      console.log('test');
      console.log(error.message);
    }
  }
}