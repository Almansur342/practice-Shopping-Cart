 function updateProduct (inputId, price, total, isTrue){
   const input = document.getElementById(inputId);
   let inputNumber = input.value;
   if(isTrue == true){
     inputNumber = parseInt(inputNumber) + 1;
   }else if(isTrue == false && inputNumber > 0){
     inputNumber = parseInt(inputNumber) - 1;
   } 
    input.value = inputNumber;

    const productPrice = document.getElementById(total);
    productPrice.innerText= inputNumber * price;
    calculateTotal();
 }

 function getInputId(inputId){
    const input = document.getElementById(inputId);
    const inputNumber = parseInt(input.value);
    return inputNumber;
 }
 function calculateTotal(){
   const phoneTotal = getInputId('phone-number') * 1219;
   const caseTotal = getInputId('case-number') * 59;
   const subTotal = phoneTotal + caseTotal;
   const tax = subTotal / 10;
   const totalPrice = subTotal + tax;
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total-price').innerText = totalPrice;
 }


document.getElementById('case-plus').addEventListener('click', function(){
    updateProduct('case-number',59,'case-total',  true);
   
})

document.getElementById('case-minus').addEventListener('click', function(){
  updateProduct('case-number',59, 'case-total', false)
})

document.getElementById('phone-plus').addEventListener('click', function(){
  updateProduct('phone-number',1219,'phone-total', true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
  updateProduct('phone-number',1219, 'phone-total', false);
})