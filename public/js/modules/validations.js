import { regexName, regexTell, regexEmail } from "./regex.js";
//class SignUp
/*
Essa class possui alguns métodos de Validação Inputs. 


*/
export class Validations {
  constructor(
    nameUserInput,
    NameAlert,
    TellUserInput,
    TellAlert,
    EmailUserInput,
    EmailAlert,
    UfUserInput,
    CityInput,
    DateInput,
    MaterialInput,
    TypeOfMaterial,
    ProcessOfMaterial,
    ButtonRegister,
    key
  ) {
    this.name = nameUserInput;
    this.ErrorName = NameAlert;
    this.tell = TellUserInput;
    this.ErrorTell = TellAlert;
    this.email = EmailUserInput;
    this.ErrorEmail = EmailAlert;
    this.Uf = UfUserInput;
    this.City = CityInput;
    this.DateInput = DateInput;
    this.Material = MaterialInput;
    this.TypeOfMaterial = TypeOfMaterial;
    this.process = ProcessOfMaterial;
    this.Button = ButtonRegister;
    this.key = key;
  }
  createDate() {
    let myDate = new Date();
    let day =
      myDate.getDate() - 1 < 10 ? "0" + myDate.getDate() : myDate.getDate();
    let month =
      myDate.getMonth() + 1 < 10
        ? "0" + (myDate.getMonth() + 1)
        : myDate.getMonth() + 1;
    let year = myDate.getFullYear();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();
    let date = year + "-" + month + "-" + day;

    return year + "-" + month + "-" + day + "T" + hours + ":" + minutes;
  }

  createMinDateFormat() {

    let myDate = new Date();
    let day =
      myDate.getDate() + 1 < 10 ? "0" + myDate.getDate() : myDate.getDate();
    let month =
      myDate.getMonth() + 1 < 10
        ? "0" + (myDate.getMonth() + 1)
        : myDate.getMonth() + 1;
    let year = myDate.getFullYear();
    let hours = myDate.getHours();
    let minutes = myDate.getMinutes();

    return year + "-" + month + "-" + day + "T" + hours + ":" + minutes;
  }
  dateMax() {
    let max = this.createDate();
    this.DateInput.max = max;
  }
  dateMin() {
    let min = this.createMinDateFormat();
    document.getElementById("date").min = min;
  }

  error(menssage, StyleInput, AlertArea) {
    AlertArea.style.display = "block";
    AlertArea.innerHTML = menssage;
    this.Button.setAttribute("disabled", "disabled");
    StyleInput.style.borderBottom = "1px solid red";
  }

  correct(StyleInput, AlertArea) {
    this.Button.removeAttribute("disabled", "disabled");
    StyleInput.style.borderBottom = "1px solid green";
    AlertArea.style.display = "none";
  }

  validationName() {
    const result = regexName.test(this.name.value);
    if (!result) {
      this.error("Insira um nome correto !", this.name, this.ErrorName);
    } else {
      this.correct(this.name, this.ErrorName);
    }
    console.log(document.getElementById("date").value);
  }

  validationEmail() {
    const result = regexEmail.test(this.email.value);
    if (!result) {
      this.error("Insira um E-mail válido !", this.email, this.ErrorEmail);
    } else {
      this.correct(this.email, this.ErrorEmail);
    }
  }

  validationPhone() {
    const result = regexTell.test(this.tell.value);
    if (!result) {
      $(this.tell).mask("(00) 00000-0000");
      this.error("Insira um número correto!", this.tell, this.ErrorTell);
    } else {
      this.correct(this.tell, this.ErrorTell);
    }
  }

  getData() {
    let database = JSON.parse(localStorage.getItem(this.key) || "[]");
    return database;
  }

  sigIn(year, month, day, dayOfMonth) {
    let database = this.getData();
    database.push({
      nome: this.name.value,
      tell: this.tell.value,
      email: this.email.value,
      uf: this.Uf.value,
      cidade: this.City.value,
      material: this.Material.value,
      tipoMaterial: this.TypeOfMaterial.value,
      processo: this.process.value,
      Year: year,
      Month: month,
      Day: day,
      DayM: dayOfMonth,
    });
    localStorage.setItem(this.key, JSON.stringify(database));
  }
}
