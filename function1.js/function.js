// Vamos criar uma função simples para que possa ser executada. Ao ser executada esta primeira função possa realizar o calculo - a partir de um argumento numérico - o valor de uma porcentagem que também será oferecido como segundo argumento dessa função.

function calculo(a, b){
  return (a * b) / 100
}
let a = 10
let b = 300
let porcentagem =  calculo(a, b)

alert(`${a}% de ${b} é igual a ${porcentagem}`)
