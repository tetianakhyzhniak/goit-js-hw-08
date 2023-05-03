
import throttle from 'lodash.throttle';
const LOCAL_KEY = "feedback-form-state"
const submitForm = document.querySelector('.feedback-form');
const textContentInput = document.querySelector('input')

textContentInput.addEventListener('input', throttle(onInput), 500);
submitForm.addEventListener('submit', onSubmit);
let saveMessage = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {} ;

const {email, message} = submitForm.elements;
textContent();


function onInput(e){
 saveMessage = { email: email.value, message: message.value};
    localStorage.setItem(LOCAL_KEY, JSON.stringify(saveMessage));
    
}
function textContent(){
    if (saveMessage){
        email.value = saveMessage.email || '';
        message.value = saveMessage.message || '';
    }
}
// Меседж зберігається тільки при вводі email
function onSubmit(e) {
    e.preventDefault();
    console.log({ email: email.value, message: message.value });
  
    if (email.value === '' || message.value === '') {
      return alert('Please fill in all the fields!');
    }
  
    localStorage.removeItem(LOCAL_KEY);
    e.currentTarget.reset();
    saveMessage = {};
  }

