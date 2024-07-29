export class LeadsGetInData {
  constructor(SetHTMLArea, buttonMore, MoreArea, closeButton, key, API_url) {
    this.SetHTMLArea = SetHTMLArea;
    this.buttonMore = buttonMore;
    this.MoreArea = MoreArea;
    this.closeButton = closeButton;
    this.key = key;
    this.url = API_url;
  }

  GetData() {
    let database = JSON.parse(localStorage.getItem(this.key) || "[]");
    return database;
  }

  Show() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        let db = data.output; 
        console.log(db)
        for (let i in db) {
          $(`#${this.SetHTMLArea}`).append(
        `<tr class = "leads-person" id="lead-${i}" > 
            <td id="id-lead">${i}</td>
            <td id="nome-lead">
              <div class="lead-img">
                 <img src="assets/utilites/user.png" alt="">
               </div>  ${this.verifyNull(db[i].nome)}</td>
            <td id="tell" >${this.verifyNull(db[i].telefone)}</td>
            <td id="mail-lead"> ${this.verifyNull(db[i].email)}</td> 
            <td id="meterial-lead"> ${this.verifyNull(db[i].type)}</td>  
            <td id="colaborator-lead"> ${this.verifyNull(db[i].person)}</td>
             <td id="meterial-lead"> ${this.dataFormatter(db[i].date)}</td> 
         </tr>
      `
          );

          if (i % 2 == 0) {
            $("#lead-" + i).css("background-color", " #F5F5F5");
          } else {
            $("#lead-" + i).css("background-color", "#FAFAFA");
          }
        }
      });
  }  
  verifyNull(data) {
    return (data==="") ? "-----" : data;
  } 

  dataFormatter(data) { 
     if(data==="") return "----"; 

     let unformatedData =  new Date(data); 
     let day = unformatedData.getDay() < 10 ?  `0${unformatedData.getDay()}`:unformatedData.getDay(); 

     let month = (unformatedData.getMonth() < 10)? `0${unformatedData.getMonth()+1}`: unformatedData.getMonth()+1; 
     let year= unformatedData.getFullYear(); 
     return `${day}/${month}/${year}`; 
  }
}
