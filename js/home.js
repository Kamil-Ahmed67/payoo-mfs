//add money to the account
/**
 * st1: ad event handler
 prevent page reload after submit
 * st2:get money to be added to the account
 *st3:get the pin number from the input
 */
//step1 add an event handler to add the money inside the form
document.getElementById('btn-add-money').addEventListener('click',function (event){
    event.preventDefault();
    const addMoney=document.getElementById('input-add-money').value;
    const inputPin=document.getElementById('input-pin').value;
})