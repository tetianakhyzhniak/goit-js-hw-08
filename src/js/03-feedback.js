
import throttle from 'lodash.throttle';
const LOCAL_KEY = "feedback-form-state"
const submitForm = document.querySelector('.feedback-form');
const textContentInput = document.querySelector('input')

textContentInput.addEventListener('input', throttle(onInput), 500);
submitForm.addEventListener('submit', onSubmit);
let saveMessage = JSON.parse(localStorage.getItem(LOCAL_KEY)) ;

const {email, message} = submitForm.elements;
textContent();


function onInput(e){
const inputText = { email: email.value, message: message.value};
    localStorage.setItem(LOCAL_KEY, JSON.stringify(inputText));
    
}
function textContent(){
    if (saveMessage){
        email.value = saveMessage.email ;
        message.value = saveMessage.message ;
    }
}
function onSubmit(e){
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(LOCAL_KEY);
   saveMessage = {}
}

