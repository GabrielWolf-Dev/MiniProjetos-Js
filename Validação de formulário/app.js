let btnSend = document.getElementById('sendEmail');

function removeInputInvalid(input){
    input.addEventListener('click', () => {
        input.classList.remove('inputInvalid');
    });
}

btnSend.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('e-mail').value;
    const phone = document.getElementById('phone').value;


    if(checkName(name) == false){
        document.getElementById('name').classList.add('inputInvalid');
        removeInputInvalid(document.getElementById('name'));
        return false;
    }else if(checkEmail(email) == false){
        document.getElementById('e-mail').classList.add('inputInvalid');
        removeInputInvalid(document.getElementById('e-mail'));
        return false;
    }else if(checkPhone(phone) == false){
        document.getElementById('phone').classList.add('inputInvalid');
        removeInputInvalid(document.getElementById('phone'));
        return false;
    }
    
});

function checkName(name){

    let amount = name.split(' ').length;
    let splitStrName = name.split(' ');

    if(amount >= 2) {

        for(let i=0; i < amount; i++){
            if(splitStrName[i].match(/^[A-Z]{1}[a-z]+$/)){
            }else {
                alert('Por favor, insira a Primeira letra em maiúsculo de cada parte do nome');
                return false;  
            }
        }

    } else {
        alert('Insira o nome completo');
        return false;
    }  

}

function checkEmail(email) {

    if(email == ''){
        alert('Por favor, insira o e-mail');
        return false;
    }

    if(email.match(/^([a-z0-9_]+)@[gmail|hotmail]([a-z]+.com)$/)){
    }else {
        alert('Insira o e-mail corretamente');
        return false
    }

}

function checkPhone(phone) {

    if(phone == ''){
        alert('Por favor, insira o seu telefone');
        return false;
    }

    if(phone.match(/^\([0-9]{2}\)[0-9]{5}-[0-9]{4}$/)){
    }else {
        alert('Insira o seu telefone corretamente');
        return false
    }

}