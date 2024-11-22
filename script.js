document.getElementById('create-account').addEventListener('click',function(e){
    e.preventDefault();
    const password=document.getElementById('password').value;
    console.log(password)
    const confirmPassword=document.getElementById('confirm-password').value;
    console.log(confirmPassword)
    const errmes=document.getElementById('errMessage');

    
    if(password==="" && confirmPassword===""){
        errmes.textContent="Please provide a valid password."
    }
    else{
        errmes.textContent="Password do not match!"
    }
    if (password===confirmPassword && password!=="" && confirmPassword!==""){
        window.location.href = 'thankyou.html';
    }
    
});
