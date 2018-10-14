module.exports = function makeExchange(currency) {
  const coins = ['H', 'Q', 'D', 'N', 'P'];
  const denomination = [50, 25, 10, 5, 1];
  const count = {};

  if (currency > 10000) {
    count.error = "You are rich, my friend! We don't have so much coins for exchange";
  } else {
    coins.forEach((item, index) => counter(item, denomination[index]));
  }

  function counter(coin, denomination){
    if (currency >= denomination) {		
      count[coin] = parseInt(currency / denomination);
      currency = currency % denomination;
    }
  }

  return count;
}