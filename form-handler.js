function handleMarkBox() {
    const allMethods = document.querySelector("#all-methods");
    const email = document.querySelector("#email-checkbox");
    const sms = document.querySelector("#sms");

    allMethods.addEventListener("click", () => {
        allMethods.classList.toggle("checkedCheckbox");
        allMethods.classList.remove("semiCheckedCheckbox");
        if(allMethods.classList.contains("checkedCheckbox") === true){
            email.classList.add("checkedCheckbox");
            sms.classList.add("checkedCheckbox");
        }
        else {
            email.classList.remove("checkedCheckbox");
            sms.classList.remove("checkedCheckbox");
        }
    });

    email.addEventListener("click", () => {
        email.classList.toggle("checkedCheckbox");
        if(email.classList.contains("checkedCheckbox") === true && sms.classList.contains("checkedCheckbox") === false){
            allMethods.classList.remove("checkedCheckbox");
            allMethods.classList.add("semiCheckedCheckbox");
        }
        else if (email.classList.contains("checkedCheckbox") === true && sms.classList.contains("checkedCheckbox") === true){
            allMethods.classList.remove("semiCheckedCheckbox");
            allMethods.classList.add("checkedCheckbox");
        }
        else if (email.classList.contains("checkedCheckbox") === false && sms.classList.contains("checkedCheckbox") === true){
            allMethods.classList.remove("checkedCheckbox");
            allMethods.classList.add("semiCheckedCheckbox");
        }
        else{
            allMethods.classList.remove("checkedCheckbox");
            allMethods.classList.remove("semiCheckedCheckbox");
        }
    });

    sms.addEventListener("click", () => {
        sms.classList.toggle("checkedCheckbox");
        if(sms.classList.contains("checkedCheckbox") === true && email.classList.contains("checkedCheckbox") === false){
            allMethods.classList.remove("checkedCheckbox");
            allMethods.classList.add("semiCheckedCheckbox");
        }
        else if (sms.classList.contains("checkedCheckbox") === true && email.classList.contains("checkedCheckbox") === true){
            allMethods.classList.remove("semiCheckedCheckbox");
            allMethods.classList.add("checkedCheckbox");
        }
        else if (sms.classList.contains("checkedCheckbox") === false && email.classList.contains("checkedCheckbox") === true){
            allMethods.classList.remove("checkedCheckbox");
            allMethods.classList.add("semiCheckedCheckbox");
        }
        else{
            allMethods.classList.remove("checkedCheckbox");
            allMethods.classList.remove("semiCheckedCheckbox");
        }
    });
}

function radioHandle() {

    const radioButtons = document.querySelectorAll('.radioButton');
    radioButtons.forEach(radio => {
    radio.addEventListener('click', () => {
        removeCheckRadios(radioButtons);
        radio.children[0].classList.add('checkRadioButton');
    })
    });

    function removeCheckRadios(radioButtons) {
    radioButtons.forEach(radio => {
        radio.children[0].classList.remove('checkRadioButton');
    });
    }

}

const styleDisplay = ['block', 'none'];
const styleTrans = ['0px', '0px, -10px'];

function tipo(ordem) {
const item = document.getElementById('item' + ordem);
document.getElementById('inputTipoCarne').value = item.innerHTML;
}

function dropdown(opcao) {
const item = document.getElementsByClassName('dropdown')[0];
item.style.display = styleDisplay[opcao];

setTimeout(() => {
    item.style.transform = 'translate(' + styleTrans[opcao] + ')';
}, 0);
}
radioHandle();
handleMarkBox();