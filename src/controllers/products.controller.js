const { products } = require('../data/products');

const getAllProducts = (req, res) => {
     const { manufacturer, } = req.query;

    let result = [...products];
    

    if (manufacturer) {
        result = result.filter(
            (product) =>
                product.manufacturer.toLowerCase() === manufacturer.toLowerCase()
        )
    }
    res.status(200).json({
        success: true,
        data: result
    })
};

const getProductbymanufacturer = (req, res) => {
    const { manufacturer } = req.params;
    if (!manufacturer) {
        return res.status(404).json({
            success: false,
            message: 'please provide a manufacturer',
            data: null,
        });
    }
    const product = products.find((u) => u.manufacturer.toLowerCase() === manufacturer.toLowerCase());

    if (!product) {
        return res.status(404).json({
            status: false,
            message: 'Product not found',
            data: null,
        });
    }

    res.status(200).json({
        status: true,
        message: 'Product found successfully',
        data: product,
    });
}
    
const getProductbysize = (req, res) => {
    const { size } = req.params;
    if (!size) {
        return res.status(404).json({
            success: false,
            message: 'please provide an inche',
            data: null,
        });
    }
    const product = products.find((u) => u.size === Number(size));

    if (!product) {
        return res.status(404).json({
            status: false,
            message: 'Product not found',
            data: null,
        });
    }

    res.status(200).json({
        status: true,
        message: 'Product found successfully',
        data: product,
    });
}

module.exports = { getAllProducts, getProductbymanufacturer, getProductbysize };