console.log('hello');
// " + " a click korle 1 ar man barbe plus hobe:
document.getElementById('case-plus').addEventListener('click', function(){
const caseInput = document.getElementById('case-number');
let caseNumber = caseInput.value ;
caseInput.value = parseInt(caseNumber) + 1 ;
});


// " - " a click korle 1 ar man barbe plus hobe:
document.getElementById('case-minus').addEventListener('click', function(){
    const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseInt(caseNumber) - 1 ;

});

// Update case Total :
const caseTotal = document.getElementById('case-total');
caseTotal.innerText = caseNumber * 59 ;


