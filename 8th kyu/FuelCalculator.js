const fuelPrice = (litres, pricePerLiter) => {
  let pricePerLiterWithDescount = pricePerLiter

  for (let i = 2; i <= 10; i += 2) {
    if (litres >= i) {
      pricePerLiterWithDescount -= 0.05
    }
  }

  return Number((litres * pricePerLiterWithDescount).toFixed(2))
}
