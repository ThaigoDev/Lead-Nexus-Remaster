import { Form } from "./login.js"; 
let MyForm = new Form ("inputEmail","labelEmail","inputPass","labelPass","login-btn","../data/accounts.JSON"); 

let db = await MyForm.getDB(); 

MyForm.inputEmail.addEventListener("keyup",()=>{
  MyForm.validationEmail();   
})  
MyForm.button.addEventListener("click",()=>{
    MyForm.Auth(db); 
})