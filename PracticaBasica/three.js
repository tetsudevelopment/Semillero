let pear = 1;
let valuePear = 600;
let valuePineapple = 1800;
let pineapple = 1;
let total = pear * valuePear + pineapple * valuePineapple;
if (total > 10000) {
  total = total - total * (10 / 100);
  console.log(
    "El total de peras es: ",
    pear,
    " Total de Piñas: ",
    pineapple,
    " Valor total: ",
    total
  );
} else {
  console.log(
    "El total de peras es: ",
    pear,
    " Total de Piñas: ",
    pineapple,
    " Valor total: ",
    total
  );
}
