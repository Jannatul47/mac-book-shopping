
// Handle Deposit Button Event :
document.getElementById('deposit-button').addEventListener('click', function(){
    // console.log('deposit button clicked');

    //1. Depositer Input theke Value Anar Jonno : Get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value ;
    const newDepositAmount = parseFloat(newDepositAmountText);
    // console.log(depositAmount);

    // // Deposit Box a input ar amount dekhanur jonno :
    // const depositTotal = document.getElementById('deposit-total');
    // depositTotal.innerText = depositAmount;

    // Deposit Box a input ar amount gula (jug + ) kore dekhanur jonno : Update deposit total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // Add Deposit Box Value in Balance Box: 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount ;
    balanceTotal.innerText = newBalanceTotal;

    // Clear the deposit input field:
    depositInput.value = '';
});

// 2.Withdraw Session :
document.getElementById('withdraw-button').addEventListener('click', function(){

    //1. Withdraw ar Input theke Value Anar Jonno : Get the amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value ;
    const newWithdrawtAmount = parseFloat(withdrawAmountText);

    //  Withdraw Box a je value ache shei Value Anar Jonno : 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawtText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawtText);

    // Input ar value R withdraw box ar value (Jug +) kora :
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawtAmount;
    withdrawTotal.innerText = newWithdrawTotal;
    

    // Update Balance :
    // Balance Box a je value ache shei value paowar jonno :
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    // Balance Box ar value theke Withdraw box ar value (biyog -) kora:
    const newBalanceTotal = previousBalanceTotal - newWithdrawtAmount ;
    // Biyog kore biyohfolta Balance box a rakha :
    balanceTotal.innerText = newBalanceTotal;

    // Clear the withdraw input field:
    withdrawInput.value = '';
});