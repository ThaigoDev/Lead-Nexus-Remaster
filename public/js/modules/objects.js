//IMPORTS

import { Validations } from "./validations.js";
import { LeadsGetInData } from "./GetData-module.js"; 
 
import {
  key, 
  urlAPI,
  URL_API_COLABORATORS,
  URL_PLASTIC_API, 
  URL_PAPEL_API,
  URL_METAL_API,
  URL_VIDRO_API,
  URL_PRENSAS_API,
  URL_INFOPRODUTO_API,
  URL_FRETE_API} from "../modules/keys.js";

import { Get_APIS } from "./APIS-modules.js"; 
 
//FORM:  
/*  
Funcionalidade : 
Usamos o objeto form para representar o nosso formulário 
e seu inputs. 
Desenvolvedor : Thiago 
*/
export const Form = {
  nomeInput: () => document.getElementById("nome"),
  nameAlert: () => document.getElementById("avisoName"),
  TellInput: () => document.getElementById("tel"),
  tellAlert: () => document.getElementById("avisoTell"),
  EmailInput: () => document.getElementById("mail"),
  EmailAlert: () => document.getElementById("avisoEmail"),
  UfInput: () => document.getElementById("uf"),
  CityInput: () => document.getElementById("cidade"), 
  DateInput : ()=> document.getElementById("date"), 
  MaterialInput: () => document.getElementById("material"),
  TipoDeMaterialInput: () => document.getElementById("TipoDeMaterial"),
  ProcessoInput: () => document.getElementById("Processo"),
  Button: () => document.getElementById("register-btn"),
};

/*
ValidationOfForm 

Functionaldiade : 
Objeto que possui métodos de validação de inputs do formulário. 

Desenvolvedor: Thiago Duarte


*/
export const ValidationsOfForm = new Validations(
  Form.nomeInput(),
  Form.nameAlert(),
  Form.TellInput(),
  Form.tellAlert(),
  Form.EmailInput(),
  Form.EmailAlert(),
  Form.UfInput(),
  Form.CityInput(),
  Form.DateInput(), 
  Form.MaterialInput(),
  Form.TipoDeMaterialInput(),
  Form.ProcessoInput(),
  Form.Button(),
  key
);
/*GetData 
Funcionalidade : 
Esse objeto mostra os dados obtidos pela api 
Esse API puxa os dados que inserimos no sistema.

Desenvolvedor: Thaigo Duarte


*/
export let GetData = new LeadsGetInData(
  "area-leads",
  "more-",
  "area-",
  "close-",
  key,
  urlAPI
);

// Get_APIS_For_Materials 
/* 
Funcionalidade : Esse objeto possui alguns métodos que fazem
a integração das APIS necessários do projeto. 

Desenvolvedor: Thiago Duarte

*/
export let Get_APIS_For_Materials = new Get_APIS(urlAPI, URL_API_COLABORATORS, URL_PLASTIC_API, URL_PAPEL_API, URL_METAL_API, URL_VIDRO_API, URL_PRENSAS_API, URL_INFOPRODUTO_API, URL_FRETE_API); 



