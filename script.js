const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const typeOfMeat = document.querySelector("#inputTipoCarne");
const messageText = document.querySelector("#message");

const radioButtons = document.querySelectorAll(".radioButton");
const markboxs = document.querySelectorAll(".check");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

    let isNameValid = nameValidation(nameInput.value.trim());
    if (!isNameValid){
        alert("Nome não é valido, precisa ter seu nome e pelo menos 1 sobrenome");
        return;
    }
    
    let isEmailValid = emailValidation(emailInput.value.trim());
    if(!isEmailValid){
        alert("Email não é valido");
        return;
    }

    let isPhoneValid = phoneValidation(phoneInput.value.trim());
    if(!isPhoneValid){
        alert("Telefone não é valido");
        return;
    }

    let isRadionButtons = radioButtonsValidation(radioButtons);
    console.log(isRadionButtons)
    if(!isRadionButtons){
        alert("Você precisa selecionar um tipo de corte");
        return;
    }  

    let isDropdownInputValid = dropdownValidation(typeOfMeat.value.trim());
    if(!isDropdownInputValid){
        alert("Você precisa selecionar algum corte de carne");
        return;
    }

    let isMarkboxsValid = markboxsValidation(markboxs);
    if(!isMarkboxsValid){
        alert("Você precisa selecionar algum tipo de notificação");
        return;
    }
        
    let isMessageValid = messageValidation(messageText.value.trim());
    if(!isMessageValid){
        alert("Mensagem não é valida, ela deve ter pelo menos 5 caracteres");
        return;
    }

    //Enviar
    //form.submit();
    alert("FORMULARIO VALIDO!!!");
});

//validação do formulario
function nameValidation(name) {
    if (name === "")
        return false;
    
    if (name.split(" ").length <= 1)
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

function radioButtonsValidation(radioButtons) {
    let response = false;
    radioButtons.forEach(radio => {
        if(radio.children[0].classList.contains("checkRadioButton") === true)
            response = true;
    });
    return response;
}

function dropdownValidation(dropdownInput) {
    if (dropdownInput === "")
        return false;
    
    if (dropdownInput === null)
        return false;
    
    return true;
}

function markboxsValidation(markboxs) {
    let response = false;
    markboxs.forEach(mark => {
        if(mark.classList.contains("checkedCheckbox") === true)
            response = true;
    });
    return response;
}

function messageValidation(message) {
    if (message === "")
        return false;
    
    if (message.length < 5)
        return false;
    
    return true;
}