//step1 add an event handler to cash out the money inside the form
document.getElementById('btn-cash-out').addEventListener('click',function (event){
    event.preventDefault();
    // step2 get money and pin to be added to the account
    const cashOutMoney=document.getElementById('input-cashOut-money').value;
    const inputPin=document.getElementById('input-cashOut-pin').value;
    //step3 verify pin number
    if(inputPin==='1234')
    {
        //step4 get the current balance
        const currentBalance=document.getElementById('current-balance').innerText;
        //step5 add cashOutMoney Input with currentBalance
        const cashOutMoneyNumber=parseFloat(cashOutMoney);
        const currentBalanceNumber=parseFloat(currentBalance);
        const newBalance=currentBalanceNumber - cashOutMoneyNumber;
       // console.log(newBalance);

        //step6 update the balance in UI
        document.getElementById('current-balance').innerText=newBalance;
    }
    else{
        alert('Failed to Cash Out! Please Try Again');
    }

})