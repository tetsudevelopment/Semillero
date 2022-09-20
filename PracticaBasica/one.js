let client = 1000001;
let discount = 10 / 100;
let total = 0;
if (client > 1000000) {
  total =client-(client * discount);
} else {
  total = client;
}
console.log('Total de su compra ' ,total);