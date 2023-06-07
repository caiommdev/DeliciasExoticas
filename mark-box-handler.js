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
            allMethodsSpan.classList.add("semi-checkmark");
            allMethods.checked = false;
        }
        else if(email.checked === true && sms.checked === true){
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = true;
        }
        else if(email.checked === false && sms.checked === true){
            allMethods.checked = false;
            allMethodsSpan.classList.add("semi-checkmark");
        }
        else {
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = false;
        }
    });


    sms.addEventListener("click", (event) => {
        if(sms.checked === true && email.checked === false){
            allMethodsSpan.classList.add("semi-checkmark");
            allMethods.checked = false;
        }
        else if(sms.checked === true && email.checked === true){
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = true;
        }
        else if(sms.checked === false && email.checked === true){
            allMethodsSpan.classList.add("semi-checkmark");
            allMethods.checked = false;
        }
        else {
            allMethodsSpan.classList.remove("semi-checkmark");
            allMethods.checked = false;
        }
    });
}
handleMarkBox();