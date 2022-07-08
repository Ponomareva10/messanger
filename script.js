const autor = document.getElementById('autor');
const message = document.getElementById('message');
const sendButton = document.getElementById('send');
const password = document.getElementById('pass');
const form = document.querySelector('.form');
const date = new Date();
const pass = 12345;
let isAusent = false;
const userPass = prompt('Введите пароль, пожалуйста.');

if(pass == userPass) {
    isAusent = true;
}

const messages = [];

function renderMessage() {
    form.innerHTML = "";
    messages.forEach((item) => {
        const text =`<div class="sms">
            <h3>${item.autor}</h3>
            <p>${item.message}</p>
            <p>${item.date}</p>
        </div>`
        form.innerHTML += (text);
        });
}

function resed (inputMessage, inputAutor, inputPass) {
    inputMessage.value = '';
    inputAutor.value = '';
    inputPass.value = '';
};

sendButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (isAusent){
        if(autor.value && message.value) {
            if( autor.value.length > 3 && password.value.length > 3) {
                const sendMessage = message.value;
                const sendAutor = autor.value;
                
                const newMessage = {
                    autor: sendAutor,
                    message: sendMessage,
                    date:`${ date.getHours()} : ${date.getMinutes()}`
                };
                
                messages.push(newMessage);
            }   else{
                alert('Поля не прошли проверку на количество символов.');
            };

        }   else {
            alert('Сорри, нужно заполнить все поля!');
        };
    }  else {
        alert('Сорри, пароль не верный.');
    };
    
    renderMessage();
    resed(message, autor, password);
});