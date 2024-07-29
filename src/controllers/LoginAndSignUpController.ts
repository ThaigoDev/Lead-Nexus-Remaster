const { Leads } = require("../models/LeadModel.ts");
const { SignUp } = require("../models/SignupModelAndLoginModel.ts");

 abstract class LoginAndSignUpController { 
   public static signupIndex  (req:any, res:any)  {
      res.render("singup");
   }
  public static async loginIndex  (req:any, res:any) {
      const signup = new SignUp(req.body);
      const leads = new Leads(req.body, req.session.user);
      const allUsers = await signup.getAllUsers();
      const allLeads = await leads.getLeads();
      if (req.session.user) return res.render('Home', { allLeads, allUsers });
      res.render("Login");
   } 
   public static async signupRegister(req:any, res:any):Promise<any> {  
      req.body.office = "Colaborador";
      const singUp = new SignUp(req.body);
      await singUp.register();
      if (singUp.errors.length > 0) {
         req.flash("erros", singUp.errors);
         req.session.save(() => res.redirect('back'));
      } else {
         req.session.save(() => {
            req.flash("sucess", "Conta criada com Sucesso!");
            return res.redirect("/");
   
         })
         return;
      } 
   } 
    public static  async login (req:any, res:any) :Promise<any> {
      const singup = new SignUp(req.body);
      await singup.login();
      if (singup.errors.length > 0) {
         req.flash("erros", singup.errors);
         req.session.save(() => {
            return res.redirect('back');
         })
         return
      } else {
         req.session.user = singup.user;
         return res.redirect("/home/index");
      }
   }
   
   
}

module.exports = LoginAndSignUpController; 

