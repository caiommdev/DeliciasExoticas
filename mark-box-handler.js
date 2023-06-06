function handleMarkBox() {
    const allMethods = document.querySelector("#todos-os-meios");
    const email = document.querySelector("#email-checkbox");
    const sms = document.querySelector("#sms");

    console.log(allMethods.checked, email.checked, sms.checked);

    allMethods.addEventListener("click", (event) => {
        if (allMethods.checked === true) {
            email.checked = true;
            sms.checked = true;
        }
        else {
            email.checked = false;
            sms.checked = false;
        }
    });

    email.addEventListener("click", (event) => {
        if(email.checked === true && sms.checked === false){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
        }
        else if(email.checked === true && sms.checked === true){
            allMethods.checked = true;
        }
        else if(email.checked === false && sms.checked === true){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
        }
        else {
            allMethods.checked = false;
        }
    });


    sms.addEventListener("click", (event) => {
        if(sms.checked === true && email.checked === false){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
        }
        else if(sms.checked === true && email.checked === true){
            allMethods.checked = true;
        }
        else if(sms.checked === false && email.checked === true){
            //adicionar classe de semi marcado para checkbox -> todos os metodos
        }
        else {
            allMethods.checked = false;
        }
    });
}
handleMarkBox();