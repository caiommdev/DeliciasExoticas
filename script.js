const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const typeOfMeatSelect = document.querySelector("#tipos-carnes");
const messageText = document.querySelector("#message");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let isNameValid = nameValidation(nameInput.value.trim());
    if (!isNameValid)
        alert("Nome n valido");
    
    let isEmailValid = emailValidation(emailInput.value.trim());
    if(!isEmailValid)
        alert("Email n valido");

    let isPhoneValid = phoneValidation(phoneInput.value.trim());
    if(!isPhoneValid)
        alert("Telefone n valido");

    let isSeletctInputValid = selectValidation(typeOfMeatSelect.value.trim());
    if(!isSeletctInputValid)
        alert("select n valido");

    let isMessageValid = messageValidation(messageText.value.trim());
    if(!isMessageValid)
        alert("mensagem n valida")    
    //Enviar
    //form.submit();
});

function nameValidation(name) {
    if (name === "")
        return false;
    
    if (name.split(" ").length < 1)
        return false;

    return true;
}

function emailValidation(email) {
    const emailRegex = new RegExp (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    if (emailRegex.test(email))   
        return true;
    
    return false;
}

function phoneValidation(phone) {
    if (phone === "")
        return false;

    let phoneNumbers = phone.replaceAll('(','').replaceAll(')', '').replaceAll('-','').replaceAll(' ', '');
    if (phoneNumbers.length === 11)
        return true;
    
    return false;
}

function selectValidation(selectInput) {
    if (selectInput === "")
        return false;
    
    if (selectInput === "nao-escolhido")
        return false;
    
    return true;
}

function messageValidation(message) {
    if (message === "")
        return false;
    
    if (message.length < 5)
        return false;
    
    return true;
}