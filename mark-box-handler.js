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
}
handleMarkBox();