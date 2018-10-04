// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let coins = ['H', 'Q', 'D', 'N', 'P'];
    let denomination = [50, 25, 10, 5, 1];
    let count = new Object();

    if (currency > 10000) {
    	count.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
  		for (let i = 0; i < coins.length; i++) {
    		counter(coins[i], denomination[i]);
  		}
    }

	function counter(coin, denomination){
		if (currency > 0 && currency >= denomination) {		
			count[coin] = parseInt(currency / denomination);
			currency = currency % denomination;
		}
	}

	return count;
}
