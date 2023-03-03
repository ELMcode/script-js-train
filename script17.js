const prices = [99, 129, 149];
const discounts = [0.1, 0.2, 0.25];

function getValues(prices, discounts) {
 const values = [];
 for (let i = 0; i < prices.length; i++) {
  values[i] = prices[i] * discounts[i];
 }
 console.log(values);
}
getValues(
prices, discounts
);