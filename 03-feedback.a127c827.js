LOCAL_KEY="feedback-form-state";const e=document.querySelector(".feedback-form");document.querySelector("input").addEventListener("input",(function(e){const t={email:a.value,message:n.value};localStorage.setItem(LOCAL_KEY,JSON.stringify(t))})),e.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem(LOCAL_KEY),t={}}));let t=JSON.parse(localStorage.getItem(LOCAL_KEY));const{email:a,message:n}=e.elements;t&&(a.value=t.email,n.value=t.message);
//# sourceMappingURL=03-feedback.a127c827.js.map