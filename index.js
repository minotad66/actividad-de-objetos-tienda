var client = ['Cristian Vega','León Ceballos','Jesse Cogollo']

var productStock = [{
    id: 1,
    name: "Jugos procesados",
    stock: 7,
    price: 545
},
{
    id: 2,
    name: "Harina para tortas",
    stock: 5,
    price: 8000.643
},
{
    id: 3,
    name: "Cuchuco de maíz",
    stock: 9,
    price: 1123.6565
},
{
    id: 4,
    name: "Suero",
    stock: 4,
    price: 6543.76
},
{
    id: 5,
    name: "Galletas integrales",
    stock: 14,
    price: 6540.93
},
{
    id: 6,
    name: "Combos – comidas rápidas",
    stock: 7,
    price: 23436.634
},
{
    id: 7,
    name: "Jugos procesados",
    stock: 7,
    price: 545
},
{
    id: 8,
    name: "Cilantro",
    stock: 3,
    price: 545
},
{
    id: 9,
    name: "Avena molida",
    stock: 4,
    price: 5476.985
},
{
    id: 10,
    name: "Mermeladas",
    stock: 8,
    price: 6534.654
},
{
    id: 11,
    name: "Mayonesa",
    stock: 6,
    price: 5432.443
}]

var productsPurchased = [{
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

var total = 0;

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
  // TODO: Función Principal getCostList
  function getCostList(client, productsIds) {
    // Código aquí...
    let lista = productsIds.indexOf();
  }

const result = getCostList(client[0], productsPurchased);
console.log('El total de la compra es: ' + result)