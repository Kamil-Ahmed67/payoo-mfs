/*
//step-1 set event handler
document.getElementById('login-btn').addEventListener('click',function(event){
    //step-2 prevent default behavior (prevent reloading browser)
    event.preventDefault();
    //step-3 get the phone number and pin number
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;

    //console.log(phoneNumber,pinNumber);
    //step-4 validate phone and pin
    if(phoneNumber==='5' && pinNumber==='123'){
        console.log('you are logged in');
        //step-5 allow user to use website
        window.location.href='/home.html'
    }
    else{
        alert('Wrong phone number or Pin');
    }
})

*/

document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    if (phoneNumber === '5' && pinNumber === '123') {
        console.log('you are logged in');
        window.location.href = '/home.html'
    }
    else {
        alert('Wrong phone number or Pin');
    }
})