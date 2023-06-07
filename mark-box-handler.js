function handleMarkBox() {
    const allMethods = document.querySelector("#todos-os-meios");
    const allMethodsSpan = document.querySelector("#todos-os-meios-span");
    const email = document.querySelector("#email-checkbox");
    const sms = document.querySelector("#sms");

    console.log(allMethods.checked, email.checked, sms.checked);

    allMethods.addEventListener("click", (event) => {
        if (allMethods.checked === true) {
            email.checked = true;
            sms.checked = true;
            allMethodsSpan.classList.remove("semi-checkmark");
        }
        else {
            email.checked = false;
            sms.checked = false;
            allMethodsSpan.classList.remove("semi-checkmark");
        }
    });

    email.addEventListener("click", (event) => {
        if(email.checked === true && sms.checked === false){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
            allMethodsSpan.classList.add("semi-checkmark");
        }
        else if(email.checked === true && sms.checked === true){
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = true;
        }
        else if(email.checked === false && sms.checked === true){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
            allMethodsSpan.classList.add("semi-checkmark");
        }
        else {
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = false;
        }
    });


    sms.addEventListener("click", (event) => {
        if(sms.checked === true && email.checked === false){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
            allMethodsSpan.classList.add("semi-checkmark");
        }
        else if(sms.checked === true && email.checked === true){
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = true;
        }
        else if(sms.checked === false && email.checked === true){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
            allMethodsSpan.classList.add("semi-checkmark");
        }
        else {
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = false;
        }
    });
}
handleMarkBox();