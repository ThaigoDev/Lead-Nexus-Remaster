const { Leads } = require("../models/LeadModel.ts");
const { SignUp } = require("../models/SignupModelAndLoginModel.ts");
const Product = require("../models/ProductAndServiceModel.ts")
const Category = require("../models/CategoryMOdel.ts");
const Process = require("../models/ProcessModel.ts");

 abstract class HomeController  {
     public static async   index (req:any, res:any)  { 
    
        if (req.session.user)  {     
         const productModel = new Product(req.body);
         const leads = new Leads(req.body, req.session.user);
         const signup = new SignUp(req.body);
         const category = new Category(req.body);
         const process = new Process(req.body);
         const allLeads = await leads.getLeads();
         const allUsers = await signup.getAllUsers();
         const categories = await category.getAllCategory();
         const allProcess = await process.getAllProcess();
         const allProducts = await productModel.getProducts();
         const leadsOfUser = await leads.getLeadsOfUser();
         res.render('Home', { leadsOfUser, allLeads, allProducts, allUsers, categories, allProcess }); 

        } else {
         res.status(403).render("NoPermission");
        }
     } 
     public static async createLead  (req:any, res:any) {
        let body = {};

        if (!req.file) {
            body = {...req.body }; 
        } else {
            body = {...req.body , photoLead: req.file.filename,}
        }
        const leads = new Leads(body, req.session.user);
        await leads.createLead();
        if (leads.errors.length > 0) res.send(leads.errors);
        res.redirect("/home/index/");
     } 
     public static async deleteLead   (req:any, res:any) {
        const leads = new Leads(req.body, req.session.user);
        const deleted = await leads.deleteLead(req.params.id);
        req.session.save(() => { return res.redirect("back"); })
     } 
     public static async upate (req:any, res:any) {
        let body = {}
        if (!req.file) {
            body = {...req.body }; 
        } else {
            body = {...req.body , photoLead: req.file.filename,}
        }
    
        const leads = new Leads(body, req.session.user);
        await leads.edit(req.params.id);
        res.redirect('/home/index/');
     } 
     public static async logout (req:any, res:any) {
        req.session.destroy();
        res.redirect("/");
     } 
     public static async indexTest   (req:any,res:any) {
        const productModel = new Product(req.body); 
        const allProducts = await productModel.getProducts(); 
        res.json(allProducts); 
     }
} 

module.exports = HomeController; 






