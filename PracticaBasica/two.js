value = 0;
amount = 51;
total = 0;
if (amount > 50) {
  value = 30;
  total = value * amount;
  console.log('cantidad imprimidas', amount, 'Valor total: ', total);
} else {
    value = 50;
    total = value * amount;
    console.log("cantidad imprimidas", amount, "Valor total: ", total);
}