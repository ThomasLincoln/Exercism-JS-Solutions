export let ratePerHour;
export function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

export let budget;
export function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / (dayRate(ratePerHour)));
}


export let numDays;
export let discount;
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {

  const diaria = dayRate(ratePerHour);
  console.log(`Diaria: ${diaria}`)
  
  const meses = Math.floor(numDays / 22);
  console.log(`Meses: ${meses}`)
  const dias = numDays % 22;
  console.log(`dias: ${dias}`)
  
  const precoMes = (22 * meses * diaria);
  console.log(`Preco Mes: ${precoMes}`)
  const precoMesDesconto = Math.ceil(precoMes - precoMes * discount)
  console.log(`Preco Mes Desconto: ${precoMesDesconto}`)

  return Math.ceil((dias * diaria) + precoMesDesconto);

}
