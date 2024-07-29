const Product = require("../models/ProductAndServiceModel.ts")
const Category = require("../models/CategoryMOdel.ts");
const { SignUp } = require("../models/SignupModelAndLoginModel.ts");
const Process = require("../models/ProcessModel.ts");

abstract class ProductsController {
  public static async indexProduct(req: any, res: any): Promise<any> { 
    if(req.session.user) {
      const productModel = new Product(req.body);
      const signup = new SignUp(req.body);
      const category = new Category(req.body);
      const process = new Process(req.body);
      const allProducts = await productModel.getProducts();
      const allUsers = await signup.getAllUsers();
      const categories = await category.getAllCategory();
      const allProcess = await process.getAllProcess();
  
      res.render("Product", { allProducts, categories, allUsers, allProcess });
    }else {
      res.status(403).render("NoPermission");
    }
 
  }
  public static async createProduct(req: any, res: any): Promise<any> {
    let body: object = {};
    if (!req.file) {
      body = { ...req.body }
    } else {
      body = { ...req.body, productPhoto: req.file.filename }
    }
    const productModel = new Product(body);
    await productModel.create();
    res.redirect("/product/index/");
  }
  public static async editProduct(req: any, res: any): Promise<any> {
    let body = {}
    if (!req.file) {
      body = { ...req.body }
    } else {
      body = { ...req.body, productPhoto: req.file.filename }
    }

    const productModel = new Product(body);
    await productModel.getPorductByIdAndUpate(req.params.id);
    res.redirect("/product/index/");
  }
  public static async deleteProduct(req: any, res: any): Promise<any> {

    const productModel = new Product(req.body);
    await productModel.getProductByIdAndDelete(req.params.id);
    res.redirect("back")

  }
}

module.exports =ProductsController


