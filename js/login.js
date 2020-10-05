const form = document.getElementById('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const emialValue = email.value.trim();
    const passwordValue = password.value.trim();
    if(emialValue === ''){
        handleError(email,"Email Cannot be empty",true);
    }else{
        handleError(email,"Everything is correct",false);
    }
    if(passwordValue === ''){
        handleError(password,"Password cannot be empty",true);
    }else{
        handleError(password,"Everything is correct",false);
    }
}

function handleError(element,msg,isError){
    const parent = element.parentElement;
    const smallElement = parent.querySelector('small');
    if(isError){
        element.classList.add("error");
        smallElement.innerText = msg;
        smallElement.classList.add('error');    
    }
    else{
        element.className = "success";
        smallElement.innerText = "";
        smallElement.classList.remove('error');
    }
}