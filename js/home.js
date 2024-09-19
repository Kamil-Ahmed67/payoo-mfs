//add money to the account
/**
 * st1: ad event handler
 prevent page reload after submit
 * st2:get money to be added to the account
 get the pin number from the input
 *st3:verify the pin number
 */
//step1 add an event handler to add the money inside the form
document.getElementById('btn-add-money').addEventListener('click',function (event){
    event.preventDefault();
    // step2 get money and pin to be added to the account
    const addMoney=document.getElementById('input-add-money').value;
    const inputPin=document.getElementById('input-pin').value;
    //step3 verify pin number
    if(inputPin==='1234')
    {
        //step4 get the current balance
        const currentBalance=document.getElementById('current-balance').innerText;
        //step5 add addMoney Input with currentBalance
        const addMoneyNumber=parseFloat(addMoney);
        const currentBalanceNumber=parseFloat(currentBalance);
        const newBalance=currentBalanceNumber + addMoneyNumber;
       // console.log(newBalance);

        //step6 update the balance in UI
        document.getElementById('current-balance').innerText=newBalance;
    }
    else{
        alert('Failed to add money! Please Try Again');
    }

})