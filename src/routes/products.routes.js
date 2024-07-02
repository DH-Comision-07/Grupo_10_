const express = require("express");
const router = express.Router();
const  productsController = require("../controllers/productsController");
const uploadFile = require('../middlewares/multerMid');

router.get("/",productsController.home);
router.get("/productDetail/:id",productsController.detail);
router.get('/dashboard', productsController.dashboard);
router.get("/productCart",productsController.cart);
router.get("/dashboard", productsController.dashboard);

router.get("/createProduct", productsController.create);
router.post("/", uploadFile.single("imagenProducto"), productsController.store);

router.get("/editProduct/:id", productsController.edit);
router.patch("/productDetail/:id",uploadFile.single("imagenProducto"), productsController.modify);

router.delete("/dashboard/:id", productsController.delete);

module.exports = router;