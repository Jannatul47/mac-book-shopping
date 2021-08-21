    
    // Deposit And Withdraw Input Common Field :
    function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value ;
    const amountValue = parseFloat(inputAmountText);
    // Clear the deposit input field:
    inputField.value = '';
    return amountValue;
   
    }
// Deposit Box And Withdraw Box Text Common Field :
    function updateTotalField(totalFieldId, amount){
    
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    const newDepositTotal = previousTotal + amount;
    totalElement.innerText = newDepositTotal;
    
    }


    function getCurrentBalance(){
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        return previousBalanceTotal;

    }

    // Balance Function :
    function updateBalance(amount, isAdd){
        const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);

        const previousBalanceTotal = getCurrentBalance();  
        if(isAdd == true){
        balanceTotal.innerText = previousBalanceTotal + amount;
        }
        else{
            balanceTotal.innerText = previousBalanceTotal - amount; 
        }
    }
    // Deposit Session:
    document.getElementById('deposit-button').addEventListener('click', function(){
        const depositAmount = getInputValue('deposit-input');
        // negative number dile thik korar jonno :
        if (depositAmount > 0){
            updateTotalField('deposit-total',depositAmount);
        // deposit Balance:
        updateBalance(depositAmount, true);
        }
        
    });

    // 2.Withdraw Session :
    document.getElementById('withdraw-button').addEventListener('click', function(){
        const withdrawAmount = getInputValue('withdraw-input');
        const currentBalance = getCurrentBalance();
        // negative number dile thik korar jonno :
        if(withdrawAmount > 0 && withdrawAmount < currentBalance){
            updateTotalField('withdraw-total',withdrawAmount);
        // withdraw Balance:
        updateBalance(withdrawAmount, false);
        }

        // Error Message:
        if(withdrawAmount > currentBalance){
            console.log('You can not withdraw money');
            // console diye error sms ta website a dekha jabe na inspect a dekha jabe. tai kivabe website a dekhanu jai sheita parte hobe . 
        }
        
 });



    
    