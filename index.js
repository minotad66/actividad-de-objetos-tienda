const clients = ['Cristian Vega','León Ceballos','Jesse Cogollo']

const products = [{
    id: 1,
    name: "Jugos procesados",
    quantity: 7,
    price: 545
},
{
    id: 2,
    name: "Harina para tortas",
    quantity: 5,
    price: 8000.643
},
{
    id: 3,
    name: "Cuchuco de maíz",
    quantity: 9,
    price: 1123.6565
},
{
    id: 4,
    name: "Suero",
    quantity: 4,
    price: 6543.76
},
{
    id: 5,
    name: "Galletas integrales",
    quantity: 14,
    price: 6540.93
},
{
    id: 6,
    name: "Combos – comidas rápidas",
    quantity: 7,
    price: 23436.634
},
{
    id: 7,
    name: "Jugos procesados",
    quantity: 7,
    price: 545
},
{
    id: 8,
    name: "Cilantro",
    quantity: 9,
    price: 545
},
{
    id: 9,
    name: "Avena molida",
    quantity: 4,
    price: 5476.985
},
{
    id: 10,
    name: "Mermeladas",
    quantity: 8,
    price: 6534.654
},
{
    id: 11,
    name: "Mayonesa",
    quantity: 6,
    price: 5432.443
}]

const productsList = [{
    id: 1,
    quantity: 7,
},
{
    id: 2,
    quantity: 5,
},
{
    id: 3,
    quantity: 9,
},
{
    id: 4,
    quantity: 4,
},
{
    id: 5,
    quantity: 14,
},
{
    id: 6,
    quantity: 10,
},
{
    id: 7,
    quantity: 4,
},
{
    id: 8,
    quantity: 3
},]


function cliente(name, num){
  let res;
  if(name === 'Cristian Vega'){
    res = (num*5)/100;
    return res = num-res;
  }
  else if(name === 'León Ceballos'){
    res = (num*10)/100;
    return res = num-res;
  }
  else if(name === 'Jesse Cogollo'){
    res = (num*2)/100;
    return res = num-res;
  }
  else{
    console.log("el cliente no esta");
  }
}

function getCostList(client, productsList) {
    console.log('LISTA DE COMPRAS');
    console.log('Nombre del cliente: ',client);
    var total = 0;
    productsList.forEach((item)=>{
      var subtotal;
      const productoAComprar = item.id;
      const cantidadAComprar = item.quantity;
      var inventario = products.find(productItem => productItem.id === productoAComprar);
      if(inventario.quantity >= cantidadAComprar){
          subtotal = cantidadAComprar * inventario.price;
          inventario.quantity -= cantidadAComprar;
      }else{
          subtotal = inventario.quantity * inventario.price;
          inventario.quantity -= inventario.quantity;
      }
      total = subtotal + total;
      console.log('Producto: ',inventario.name);
      console.log('Precio: ',inventario.price);
      console.log('Cantidad a comprar: ',item.quantity);
      console.log('Cantidad restante: ',inventario.quantity);
      console.log('Sub-total: ', subtotal);
      console.log('');
  });
  
  console.log('total de la compra sin descuento: ',total);
  return cliente(client, total);
}

const result = getCostList(clients[0], productsList);

// Imprime el total de la compra
console.log('El total de la compra es: ' + result.toFixed(2))

/**
 * TE RECOMENDAMOS
 * 1. Primero recorre, suma y multiplica los productos de acuerdo a la cantidad
 * 2. Saca el descuento según el cliente
 * 3. Aplica el descuento  al total
 * 4. Al utilizar el console.log pon titulos a lo que imprimes
 */

/**
 * LISTA DE CHEQUEO
 * Calcular el total de la compra
 * Imprimir los productos con la  cantidad restante luego de la compra
 * Calcular el descuento
 * Imprimir el descuento
 * Aplicar descuento al total
 * Imprime el total*
 */