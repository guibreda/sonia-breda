const name = document.querySelector(`#name`);
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const btnEnviar = document.querySelector('.main-btn.-form')

btnEnviar.addEventListener('click', function() {
    if ((name == '') || (lastName == "") || (email == "") || (subject == "") || (message == "")) {
        console.log(`O campo $(name)`)
    }
});