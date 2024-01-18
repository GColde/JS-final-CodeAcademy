/* ------------------------------ TASK 8 -------------------------------------------
Sukurkite klasę "AdvancedCalculator" (naudokite ES6), kuri sukuria objektus su šiais metodais:
1. power() - priima du skaičius (bazę ir laipsnį) ir grąžina bazės pakėlimą laipsniu.
2. squareRoot() - priima vieną skaičių ir grąžina jo kvadratinę šaknį.
3. modulo() - priima du skaičius ir grąžina pirmojo skaičiaus liekaną padalijus iš antrojo.
4. factorial() - priima vieną skaičių ir grąžina jo faktorialą.
------------------------------------------------------------------------------------ */
class AdvancedCalculator {
  constructor() {}

  power(num1, num2) {
    return num1 ** num2;
  }
  squareRoot(num) {
    return Math.sqrt(num);
  }
  modulo(num1, num2) {
    return num1 % num2;
  }
  factorial(num) {
    let val = 1;
    for (let i = 2; i <= num; i++) val = val * i;
    return val;
  }
}

// Test
const advancedCalculator = new AdvancedCalculator();
console.log(advancedCalculator.power(2, 3)); // Rezultatas: 8
console.log(advancedCalculator.squareRoot(16)); // Rezultatas: 4
console.log(advancedCalculator.modulo(10, 4)); // Rezultatas: 2
console.log(advancedCalculator.factorial(5)); // Rezultatast: 120
