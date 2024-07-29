export class Get_APIS {
  constructor(
    SystemAPI,
    api_colab,
    api_plastic,
    api_papel,
    api_metal,
    api_vidro,
    api_prensas,
    api_infoproduto,
    api_frete
  ) {
    this.SystemAPI = SystemAPI;
    this.api_colab = api_colab;
    this.api_plastic = api_plastic;
    this.api_papel = api_papel;
    this.api_metal = api_metal;
    this.api_vidro = api_vidro;
    this.api_prensas = api_prensas;
    this.api_infoproduto = api_infoproduto;
    this.api_frete = api_frete;

    Object.defineProperties(this, {
      SystemAPI: {
        enumerable: false,
        writable: false,
        configurable: false,
        value: SystemAPI,
      },
    });
  }

  getUfApi(url, elChanged) {
    document.getElementById(
      elChanged
    ).innerHTML = `<option value="Disable" disabled selected>
    Selecione Estado
   </option>
   <option value="Não Informado" >
   Não Informado
 </option>`;

    try {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let db = data;
          for (let i in db) {
            document.getElementById(
              elChanged
            ).innerHTML += `<option value="${data[i].sigla}">${data[i].sigla}</option>`;
          }
        });
    } catch (err) {
      throw new Error("IBGE API not's working");
    }
  }

  getCityApi(url, citySelect) {
    try {
      document.getElementById(citySelect).innerHTML = "";
      document.getElementById(
        citySelect
      ).innerHTML = ` <option value="Disable" disabled selected>
        Selecione a Cidade
       </option>
       <option value="Não Informado" >
       Não Informado
     </option>`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let database = data;
          for (let i in database) {
            document.getElementById(
              citySelect
            ).innerHTML += `<option value="${data[i].nome}">${data[i].nome}</option>`;
          }
        });
    } catch (Err) {
      throw new Error("API de Cidades not's Working");
    }
  }

  GetApiColab(id) {
    $(`#$`).html(`<option value="Não Informado" >
        Não Informado
      </option>`);
    try {
      fetch(this.api_colab)
        .then((response) => response.json())
        .then((data) => {
          let database = data.data;
          for (let i in database) {
            document.getElementById(
              id
            ).innerHTML += `<option value="${database[i].nome}">${database[i].nome}</option>`;
          }
        });
    } catch (err) {
      alert("API COLAB NOT FOUND");
    }
  }

  MaterialGetAPI(URL, Element, key) {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        let database = data.data;
        for (let i in database) {
          document.getElementById(Element).innerHTML += `<option value="${
            database[i][`${key}`]
          }">${database[i][`${key}`]}</option>`;
        }
      });
  }

  ShowMaterial(id) {
    $(`#${id}`).on("change", () => {
      document.getElementById("TipoDeMaterial").innerHTML = "";

      let material_select = $(`#${id}`).val();

      switch (material_select) {
        case "Plastico":
          this.MaterialGetAPI(this.api_plastic, "TipoDeMaterial", "plastico");

          break;

        case "Papel":
          this.MaterialGetAPI(this.api_papel, "TipoDeMaterial", "papel");
          break;

        case "Metal":
          this.MaterialGetAPI(this.api_metal, "TipoDeMaterial", "metal");
          break;

        case "Vidro":
          this.MaterialGetAPI(this.api_vidro, "TipoDeMaterial", "vidro");
          break;

        case "Prensas":
          this.MaterialGetAPI(this.api_prensas, "TipoDeMaterial", "prensas");
          break;

        case "Info-Produto":
          this.MaterialGetAPI(
            this.api_infoproduto,
            "TipoDeMaterial",
            "infoproduto"
          );
          break;

        case "Frete":
          this.MaterialGetAPI(this.api_frete, "TipoDeMaterial", "frete");
          break;

        case "Nenhum":
          $("#TipoDeMaterial").append(
            ` <option value="Não Informado">Não Informado</option>`
          );
          break;

        default:
          ` <option value="Não Informado">Não Informado</option>`;
      }
    });
  }
}
