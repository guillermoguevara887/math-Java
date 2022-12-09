function cuadrado(lado1,lado2){
   return (lado1 * lado2);
}
const resultado = cuadrado(3,6);
console.log('El resultado es: ' + resultado);

function calcularCuadrado(lado) {
    return {
      perimetro: lado * 4,
      area: lado * lado,
    };
  }
  console.log(calcularCuadrado(5));

  function horas(dineroHoras, Horas ){
      return {
        horas: Horas,
        pago: (dineroHoras * Horas),
      };
  }

  console.log(horas(21,65));
