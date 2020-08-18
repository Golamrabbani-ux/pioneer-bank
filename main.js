//Login-area
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

//Deposit-heandler-btn
const depositBtn = document.getElementById('depositBtn');
depositBtn.addEventListener('click', function(){
    const depositNumber = getInputNumber('depositAmount')

    updateSpanText("currentBalance", depositNumber);
    updateSpanText('currentDeposit', depositNumber);
})
//Withdraw btn-handler
const withdrawBtn = document.getElementById('withdrawBtn');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText('currentWithdraw', withdrawNumber);
    updateSpanText('currentBalance', withdrawNumber * -1);
})
// Get-Input-Number
function getInputNumber(id){
    const withdrawAmount = document.getElementById(id).value;
    const amountNumber = parseFloat(withdrawAmount);
    if(withdrawAmount <= 0){
        alert('Please enter positive number');
        document.getElementById(id).value = '';
        return 0;
    }
    else{
        document.getElementById(id).value = '';
        return amountNumber;
    }
}
//update-span-text
function updateSpanText(id, addedNumber){
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = addedNumber + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}