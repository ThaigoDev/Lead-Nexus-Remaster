const { SignUp } = require("../models/SignupModelAndLoginModel.ts");

abstract class SettingsController { 
  public static indexSettings  (req:any, res:any) { 
    if(req.session.user) {
      res.render("Settings");
    }else {
      res.status(403).render("NoPermission");
    }
  } 

  public static async updateProfile(req: any, res: any) {
    let body = {}

    if (!req.file) {
      body = { ...req.body };
    } else {
      body = { ...req.body, userPhoto: req.file.filename }

    }   
     
   const profile = new SignUp(body);
   const profileUpdated = await profile.updateProfile(req.params.id);
   req.session.user = profileUpdated;
   req.session.save(() => {return res.redirect("back");})
  return 

  } 
} 
module.exports =SettingsController
