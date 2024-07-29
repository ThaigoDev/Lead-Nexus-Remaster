import { regexEmail } from "./regex.js";
export class Form {
  constructor(inputEmail,labelEmail,inputPass,labelPass,button,json) {
    this.inputEmail = document.getElementById(inputEmail); 
    this.labelEmail = document.getElementById(labelEmail) ;
    this.inputPass = document.getElementById(inputPass);  
    this.labelPass = document.getElementById(labelPass);
    this.button =  document.getElementById(button); 
    this.json = json; 
  } 
  rejectedValue(el,label,msg) {
    el.style.border = "1px solid red"; 
    label.innerText = msg; 
    this.button.setAttribute("disabled","disabled"); 
  }  
  aprovedValue(el,label) {
    el.style.border= "1px solid green"; 
    label.innerText = ""; 
    this.button.removeAttribute("disabled","disabled"); 
  } 

 async  getDB() {
     let database = await fetch(this.json).then(response => response.json()).then(data=> {
      let db = data.dados; 
      return db; 
      
    })  
    return database; 
  }  
  validationEmail() {
    let result = regexEmail.test(this.inputEmail.value); 
    if(!result) {
      this.rejectedValue(this.inputEmail,this.labelEmail,"Insira um E-mail válido !")
    }else {
      this.aprovedValue(this.inputEmail,this.labelEmail); 
    }
  } 
  Auth(db) { 
    let correctAcess =  false; 
     for(let values of db) {
       if(values.email === this.inputEmail.value && values.password === this.inputPass.value) {
         correctAcess = true; 
         this.aprovedValue(this.inputEmail,this.labelEmail);  
         this.aprovedValue(this.inputPass,this.labelPass); 
         
         
        } 
        if(!correctAcess) { 
          this.rejectedValue(this.inputEmail,this.labelEmail,"E-mail ou senha incorreto !")
         this.rejectedValue(this.inputPass,this.labelPass,"E-mail ou senha incorreto !")
        
        }
     }
  }

}
