const express = require('express'); 

const HomeController = require('./src/controllers/HomeControllers.ts'); 
const LoginAndSignUpController= require ("./src/controllers/LoginAndSignUpController");  
const AllUsersController = require("./src/controllers/AllUsersControllers.ts")
const DashboardController= require("./src/controllers/DashboardControllers.ts");   
const DashboardAdminController = require("./src/controllers/DashboardAdm.ts")
const CRMcontroller = require ("./src/controllers/CrmControllers.ts"); 
const SettingsController  = require ("./src/controllers/SettingsControllers.ts")  
const ProductsController= require("./src/controllers/ProductController.ts");  
const CategoryController = require("./src/controllers/CategoryController.ts"); 
const ProcessController = require("./src/controllers/ProcessController");
const SalesController = require("./src/controllers/SalesController.ts"); 
const  multer =  require('multer');   
const multerConfig = require("./src/config/multerConfig.ts"); 
const uploads = multer (multerConfig); 
const router = express.Router();
 
//Login and Singup Page
router.get("/" ,LoginAndSignUpController.loginIndex);
router.post("/login/auth/",LoginAndSignUpController.login); 
//SIGNUP ROUTES
router.get('/signup/index',LoginAndSignUpController.signupIndex);  
//allProductsAPi
router.get('/getproducts/',HomeController.indexTest);

router.post("/signup/register/",LoginAndSignUpController.signupRegister);   
//rota home
router.get("/home/index/",HomeController.index);   
//post do formulário
router.post("/home/create/", uploads.single('photoLead'),HomeController.createLead); 
//delete 
router.get("/home/delete/:id",HomeController.deleteLead);  
//edit 
router.post("/home/update/:id",uploads.single('leadPhotoEdit'),HomeController.upate);
//logout  
router.get("/home/index/logout",HomeController.logout); 
//DASHBOARD ROUTES 
router.get("/dashboard/index/",DashboardController.indexDashboard); 
router.get("/dashboardadm/index/",DashboardAdminController.indexDashboardAdm); 

//CRM ROUTES 
router.get("/crm/index/",CRMcontroller.indexCRM);   
//product-page routes 
router.get("/product/index/",ProductsController.indexProduct) 
router.post("/product/create/", uploads.single('productPhoto'),ProductsController.createProduct); 
router.post("/product/edit/:id",uploads.single('productPhoto-edited'),ProductsController.editProduct);  
router.get("/product/delete/:id",ProductsController.deleteProduct); 
//process -routes
router.post("/process/create/",ProcessController.createProcess);  
router.get("/process/delete/:id",ProcessController.deleteProcess);  
//category-route
router.post("/category/create/",CategoryController.createCategory);  
router.get("/category/delete/:id",CategoryController.deleteCategory) 
//allUsers Page 
router.get("/allUsers/index/",AllUsersController.indexAllUsers);  
router.post('/allUsers/edit/:id',AllUsersController.editUserPermission) 
router.get("/allUsers/delete/:id",AllUsersController.deleteUser)
//sales-page 
router.get("/sales/index/",SalesController.indexSales); 
router.post("/sale/create/",SalesController.createSales);  
router.get("/sale/delete/:id",SalesController.deleteSales); 
router.post("/sale/edit/:id",SalesController.editSales); 


//settings
router.get("/settings/index/",SettingsController.indexSettings);
router.post("/settings/update/:id",uploads.single('userPhoto'),  SettingsController.updateProfile); 
module.exports = router; 

