const fahrenheitVoCelsius = f =>{
    return (f - 32) * 5 / 9;
};
const celsiusVoFahrenheit = c =>{
    return (c * 1.8) + 32;
};


const plostinaPravoagolnik = (a, b) => {
  return a * b;
};

const perimetarPravoagolnik = (a, b) => {
  return 2 * (a + b);
};

const parenBroj = b => {
    return b % 2 === 0 ? "Brojot e paren" : "Ne e paren";
};

module.exports = {
fahrenheitVoCelsius,
celsiusVoFahrenheit,
plostinaPravoagolnik,
perimetarPravoagolnik,
parenBroj,
};


