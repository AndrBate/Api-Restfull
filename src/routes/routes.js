const router = require('express').Router()


// VERBOS HTTP (4 TIPOS DE VERBO)
// 1 GET - OBTER DADOS
// 2 POST - ENVIAR/RECEBER DADOS
// 3 PUT - ATUALIZAR DADOS
// 4 DELETE - DELETAR/REMOVER DADOS

const ProductController = require('../controllers/products')

router.get('/products/:id?', ProductController.get)
router.post('/products', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)
 

module.exports = router
