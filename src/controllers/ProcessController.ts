const Process = require("../models/ProcessModel.ts");
abstract class ProcessController {
  public static  async createProcess (req:any, res:any) {
    const process = new Process(req.body);
    await process.create();
    res.redirect("back");
  } 

public static async deleteProcess (req:any, res:any)  {
  const process = new Process(req.body);
  await process.delete(req.params.id);
  res.redirect("back");
}
}
module.exports =ProcessController; 