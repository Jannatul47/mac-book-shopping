

// Phoner + Case:
function updateProductNumber(product, isIncreasing, price){
    const productInput = document.getElementById(product +'-number');
    let productNumber = productInput.value ;

    if(isIncreasing == true){
        productNumber = parseInt(productNumber) + 1 ;
    }
    else if (productNumber > 0){
        productNumber = parseInt(productNumber) - 1 ;
    }
    productInput.value = productNumber ;

    // Update Product Total :
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price ;
    
    // calculate Total
    calculateTotal();
}

// Handle Phone Increase Decrease Events:
// " + " a click korle 1 ar man barbe plus hobe:(Cover)
document.getElementById('phone-plus').addEventListener('click', function(){
    updateProductNumber('phone', true, 1219);
    // calculateTotal();
});
// " - " a click korle 1 ar man barbe plus hobe: (Cover)
document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', false, 1219);
    // calculateTotal();
});


// Handle Case Increase Decrease Events:
// " + " a click korle 1 ar man barbe plus hobe:(Cover)
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber('case', true, 59);
    // calculateTotal();
});
// " - " a click korle 1 ar man barbe plus hobe: (Cover)
document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber('case', false, 59);
    // calculateTotal();
});

function getInputValue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value) ;
   return productNumber ;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219 ;
    const caseTotal = getInputValue('case') * 59 ;
    const subTotal = phoneTotal + caseTotal ;
    const tax = subTotal / 10 ;
    const totalPrice = subTotal + tax ;
    // Update on the html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}


