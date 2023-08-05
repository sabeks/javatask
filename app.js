// task 1
function getPowerOfnum(num) {
  return num * num;
}
// console.log(getPowerOfnum(8));

// task 2
function productPrice(startPrice, salePercent) {
  const percent = startPrice * (salePercent / 100);
  const priceSale = startPrice - percent;
  return Math.round(startPrice * (1 - salePercent / 100));
}
// console.log(productPrice(123, 17));

// task 3

function randomNumber() {
  return Math.round(Math.random() * 100);
}
// console.log(randomNumber());
// task 4
function string(text) {
  return text.length;
}
// console.log(string("alinalove"));

// task last

const currencies = [
  {
    code: "AMD",
    quantity: 1000,
    rateFormated: "6.6742",
    diffFormated: "0.0202",
    rate: 6.6742,
    name: "სომხური დრამი",
    diff: 0.0202,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "EUR",
    quantity: 1,
    rateFormated: "2.8673",
    diffFormated: "0.0131",
    rate: 2.8673,
    name: "ევრო",
    diff: -0.0131,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "GBP",
    quantity: 1,
    rateFormated: "3.3111",
    diffFormated: "0.0046",
    rate: 3.3111,
    name: "დიდი ბრიტანეთის გირვანქა სტერლინგი",
    diff: -0.0046,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "TRY",
    quantity: 1,
    rateFormated: "0.0957",
    diffFormated: "0.0003",
    rate: 0.0957,
    name: "თურქული ლირა",
    diff: 0.0003,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
  {
    code: "USD",
    quantity: 1,
    rateFormated: "2.5771",
    diffFormated: "0.0078",
    rate: 2.5771,
    name: "აშშ დოლარი",
    diff: 0.0078,
    date: "2023-07-21T17:45:10.772Z",
    validFromDate: "2023-07-22T00:00:00.000Z",
  },
];
function lowRate(arr) {
  const lowArr = arr.sort((a, b) => {
    return a.rate - b.rate;
  });
  return lowArr[0];
}
// console.log(lowRate(currencies));
