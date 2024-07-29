const Category = require("../models/CategoryMOdel.ts");
abstract class CategoryController  {
   public static async  createCategory (req:any, res:any) {
      const category = new Category(req.body);
      await category.create();
      res.redirect("back");
   }
   public static async deleteCategory (req:any, res:any)  {
      const category = new Category(req.body);
      await category.delete(req.params.id);
      res.redirect("back");
   }
}
module.exports = CategoryController;
