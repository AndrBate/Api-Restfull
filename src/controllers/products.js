const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    res.send(products)
}

async function post(req, res) {
    const {
        name,
        brand,
        price,
    } = req.body

    const product = new ProductsModel({
        name,
        brand,
        price,
    })

    product.save()

    res.send({
        message: 'Success'
    })
}

async function put(req, res) {
    const { id } = req.params

    // metodo de update que retorna o produto atualizado
    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        message: 'success',
        product,
    })

    // metodo de update que não retorna o produto atualizado
    /*
        const product = await ProductsModel.findOne({ _id: id })
    
        await product.updateOne(req.body)

        res.send({
            message: 'success',
            product,
        })

    */
}

module.exports = {
    get,
    post,
    put,
}