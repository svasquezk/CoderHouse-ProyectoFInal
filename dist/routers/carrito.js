"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carrito_1 = require("../controllers/carrito");
const productos_1 = require("../controllers/productos");
const router = express_1.Router();
router.get('/listar', carrito_1.cartController.getCart);
router.get('/listar/:id', carrito_1.cartController.getCart);
router.post('/agregar', productos_1.prodController.checkAddProduct, carrito_1.cartController.addCart);
router.delete('/borrar/:id', carrito_1.cartController.deleteCart);
exports.default = router;
