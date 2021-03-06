var express = require('express');
var router = express.Router();

const indexController = require('../controllers/indexController.js');
const autenticacao = require('../middlewares/autenticacao');



var clientesRouter = require("./clientesRouter.js");
var generosRouter = require("./generosRouter.js");
var produtoRouter = require("./produtoRouter.js");
var adminRouter = require("./admin/adminRouter.js");




router.use("/usuario",clientesRouter);
router.use("/genero",generosRouter);
router.use('/produto', produtoRouter);
router.use('/admin',/*autenticacao, comentado para testes futuros */ adminRouter);





router.get('/', indexController.index);

router.get('/faleConosco', indexController.faleConosco);

router.get('/finalizacao', indexController.finalizacao);
router.get('/checkout', indexController.checkout);
//router.get('/carrinho', indexController.carrinho);
router.get('/carrinho', indexController.carrinhoTeste);

module.exports = router;
