const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calculo-button');
const pResultado = document.querySelector('#total');

btn.addEventListener('click', calcularPrecio);

function calcularPrecio(){

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount){
        pResultado.innerText = 'Introducir un precio y un descuento para continuar';
        return
    }

    if (discount > 100){
        pResultado.innerText = 'Error, no es posible un descuento de mas del 100%';
        return
    }

    const newPrice = (price * (100 -discount )) / 100;

    pResultado.innerText = "El precio con descuento es: $ " + newPrice;
}
