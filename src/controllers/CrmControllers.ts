const { Leads } = require("../models/LeadModel.ts"); 

abstract class CRMcontroller {
  public static async indexCRM (req:any, res:any) { 
    if (req.session.user) {
      const leads = new Leads(req.body, req.session.user);
      const allLeads = await leads.getLeads(); 
      
      res.render("Crm", { allLeads });
   } else {
      res.render("NoPermission");
   }
}
} 
module.exports = CRMcontroller; 