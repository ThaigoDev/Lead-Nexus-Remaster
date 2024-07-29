const Product = require("../models/ProductAndServiceModel.ts")
const { Leads } = require("../models/LeadModel.ts");
const Category = require("../models/CategoryMOdel.ts");
const { SignUp } = require("../models/SignupModelAndLoginModel.ts");
const Process = require("../models/ProcessModel.ts");
const Sales = require("../models/SalesModel.ts");
abstract class SalesController {
    public static async indexSales(req: any, res: any) {
        if (req.session.user && req.session.user.office === "Administrador") {
            const SalesModel = new Sales(req.body);
            const productModel = new Product(req.body);
            const leads = new Leads(req.body, req.session.user);
            const signup = new SignUp(req.body);
            const category = new Category(req.body);
            const process = new Process(req.body);
            const allProducts = await productModel.getProducts();
            const allUsers = await signup.getAllUsers();
            const categories = await category.getAllCategory();
            const allProcess = await process.getAllProcess();
            const allLeads = await leads.getLeads();
            const allSales = await SalesModel.getAllSales();
            const allSalesValues = await SalesModel.getAllSalesValue();
            const allSalesFinish = await SalesModel.getAllSalesFinished();
            res.render("Sales", { allSales, allSalesValues, allSalesFinish, allLeads, allProducts, categories, allUsers, allProcess });
        }else {
            res.status(403).render("NoPermission");
        }
    }
    public static async createSales(req: any, res: any) {
        const SalesModel = new Sales(req.body);
        await SalesModel.create();
        res.redirect("back");
    }
    public static async deleteSales(req: any, res: any) {
        const SalesModel = new Sales(req.body);
        await SalesModel.delete(req.params.id);
        res.redirect("back");
    }

    public static async editSales(req: any, res: any) {
        const SalesModel = new Sales(req.body);
        await SalesModel.edit(req.params.id);
        res.redirect("back");
    }
} 
module.exports= SalesController;


