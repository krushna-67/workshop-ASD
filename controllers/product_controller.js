
const {
    getProducts,
    getProduct,
    createProduct,
    replaceProduct,
    updateProduct,
    deleteProduct
} = require('../services/product.service')

// GET all products
async function getAll(req, res) {
    try {
        const products = await getProducts()
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

// GET one product
async function getOne(req, res) {
    try {
        const product = await getProduct(req.params.id)

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json(product)
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

// POST
async function create(req, res) {
    try {
        const product = await createProduct(req.body)
        res.status(201).json(product)
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

// PUT
async function replace(req, res) {
    try {
        const product = await replaceProduct(
            req.params.id,
            req.body
        )

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json(product)
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

// PATCH
async function update(req, res) {
    try {
        const product = await updateProduct(
            req.params.id,
            req.body
        )

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json(product)
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

// DELETE
async function remove(req, res) {
    try {
        const product = await deleteProduct(req.params.id)

        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.json({ message: 'Product deleted', product })
    } catch (err) {
        res.status(500).json({ message: 'Server error' })
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    replace,
    update,
    remove
}