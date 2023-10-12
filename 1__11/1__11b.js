const totalConta = Number(prompt("Qual o valor total da conta? "));
const clientes = Number(prompt("Quantos clientes realizarão o pagamento? "));
const valorCliente = totalConta / clientes;
alert(
  `O valor de ${totalConta} dará o equivalente de ${valorCliente} para cada um`
);
