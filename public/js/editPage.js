import { Get_APIS_For_Materials } from "./modules/objects.js";
import { Form, ValidationsOfForm } from "./modules/objects.js";
import { SearchBar } from "./modules/searchBar-module.js";
import { URL_IBGE_UF_API } from "./modules/keys.js";

Get_APIS_For_Materials.getUfApi(URL_IBGE_UF_API, "uf");
document.getElementById("uf").addEventListener('change', () => {
  Get_APIS_For_Materials.getCityApi("https://servicodados.ibge.gov.br/api/v1/localidades/estados/" +
  $("#uf").val() +
  "/municipios",  'cidade'); 
})  
