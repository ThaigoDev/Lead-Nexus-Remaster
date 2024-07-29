const { Leads } = require("../models/LeadModel.ts");
const Process = require("../models/ProcessModel.ts");
const Category = require("../models/CategoryMOdel.ts");
const Product = require("../models/ProductAndServiceModel.ts")
const { SignUp } = require("../models/SignupModelAndLoginModel.ts");

abstract class DashboardController {
    public static async indexDashboard(req: any, res: any) {
        if (!req.session.user) {
            res.status(403).render("NoPermission");
        } else {
            const signup = new SignUp(req.body);
            const AllLeads = new Leads(req.body, req.session.user);
            const products = new Product(req.body);
            const allLeadsOnDB = await AllLeads.getAllNumberOfLeadsRegisterForUser();
            const leadsAll = await AllLeads.getLeads();
            const allLeadsToday = await AllLeads.getLeadsRegisterToday();
            const AllLeadsInMonth = await AllLeads.getAllLeadsInThisMonth();
            const category = new Category(req.body);
            const process = new Process(req.body);
            const categories = await category.getAllCategory();
            const allProcess = await process.getAllProcess();
            const allUsers = await signup.getAllUsers();

            res.render('Dashboard', { allLeadsToday, allLeadsOnDB, leadsAll, AllLeadsInMonth, categories, allProcess, allUsers });
        }

    };
}

module.exports = DashboardController; 