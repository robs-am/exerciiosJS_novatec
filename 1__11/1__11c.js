const produto = Number(prompt("Valor do produto: "));
const avista = produto - produto * 0.1;
const credito = produto / 3;
alert(
  `Este produto possui duas formas de pagamento: à vista com 10% de desconto que sairá por ${avista} ou em 3 x de ${credito}`
);
