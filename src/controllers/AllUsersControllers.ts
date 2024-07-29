const { SignUp } = require("../models/SignupModelAndLoginModel.ts");

abstract class AllUsersController {
   public static async indexAllUsers(req: any, res: any) {

      if (req.session.user && req.session.user.office === "Administrador") {
         const signup = new SignUp(req.body);
         const allUsers = await signup.getAllUsers();
         res.render("AllUsers", { allUsers });
      } else {
         res.render("NoPermission");
      }
   }
   public static async editUserPermission(req: any, res: any) {
      const signup = new SignUp(req.body);
      await signup.editPermissionsOfUser(req.params.id);
      res.redirect("/allUsers/index/");

   }

   public static async deleteUser(req: any, res: any) {
      const signup = new SignUp(req.body);
      await signup.deleteUser(req.params.id);
      res.redirect("/allUsers/index/");

   }
}
 
module.exports = AllUsersController; 
