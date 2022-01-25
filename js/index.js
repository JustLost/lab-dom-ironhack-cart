function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let newPrice = Number(price.innerHTML) * Number(quantity.value);
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = newPrice;
  return newPrice;
  console.log(price);
  console.log(quantity);
  console.log(newPrice);
  console.log(subtotal);
  //... your code goes here
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of testpre
  // ITERATION 2
  //... your code goes here
  let allProduct = document.getElementsByClassName('product');
  let total = 0;
  for (let i = 0; i < allProduct.length; i++) {
    total += updateSubtotal(allProduct[i]);    
  }
  
  // ITERATION 3
  //... your code goes here
  let totalValue = document.querySelector('#total-value span');  
  totalValue.innerHTML = total
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //let subtotal = product.querySelector('.subtotal span');  
  //let quantity = product.querySelector('.quantity input');

  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeBtn = document.getElementsByClassName('.btn-remove');
  

  for (let i = 0 ; i < removeBtn.length ; i++ ) {
    removeBtn[i].addEventListener('click', removeProduct());
  }
  //... your code goes here
});
