const { Leads } = require("../models/LeadModel.ts");
const Process = require("../models/ProcessModel.ts");
const Category = require("../models/CategoryMOdel.ts");
const Product = require("../models/ProductAndServiceModel.ts");
const { SignUp } = require("../models/SignupModelAndLoginModel.ts");
const Sales = require("../models/SalesModel.ts");
abstract class DashboardAdminController {
    public static async indexDashboardAdm(req: any, res: any) {
        if (!req.session.user || req.session.user.office !== "Administrador") {
            res.status(403).render("NoPermission");
        } else {
            const productModel = new Product(req.body);
            const signup = new SignUp(req.body);
            const SalesModel = new Sales(req.body);
            const AllLeads = new Leads(req.body, req.session.user);
            const allLeadsOnDB = await AllLeads.getAllNumberOfLeadsRegisterForUser();
            const leadsAll = await AllLeads.getLeads();
            const allLeadsToday = await AllLeads.getLeadsRegisterToday();
            const AllLeadsInMonth = await AllLeads.getAllLeadsInThisMonth();
            const category = new Category(req.body);
            const process = new Process(req.body);
            const categories = await category.getAllCategory();
            const allProcess = await process.getAllProcess();
            const allUsers = await signup.getAllUsers();
            const allSales = await SalesModel.getAllSales();
            const allSalesValues = await SalesModel.getAllSalesValue();
            const allSalesFinish = await SalesModel.getAllSalesFinished();
            const allProducts = await productModel.getProducts();

            res.render("DashboardAdm", {
                allProducts,
                allSales,
                allSalesValues,
                allSalesFinish,
                allLeadsToday,
                allLeadsOnDB,
                leadsAll,
                AllLeadsInMonth,
                categories,
                allProcess,
                allUsers,
            });
        }
    }
}
module.exports = DashboardAdminController;
