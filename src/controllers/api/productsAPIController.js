const db = require('../../database/models');
const Op = db.Sequelize.Op;


const productsAPIController = {
    'list': async (req, res) => {
        const count = await db.Product.count();
        const categories = await db.Category.findAll();

        const countByCategory = {};
        for (const category of categories) {
            const categoryName = category.name;
            const categoryId = category.id;
            const categoryCount = await db.Product.count({ where: { category_id: categoryId } });
            countByCategory[categoryName] = categoryCount;
        }

        const products = await db.Product.findAll({
            attributes: ['id', 'name', 'description'],
            include: [{
                model: db.Category,
                as: 'category',
                attributes: ['name']
            }]
        });

        const productArray = products.map(product => {
            const detailUrl = `/api/products/${product.id}`;
            const categoryName = product.category ? product.category.name : 'N/A';
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                category: categoryName,
                detail: detailUrl
            };
        });

        const result = {
            count: count,
            countByCategory: countByCategory,
            products: productArray
        };

        res.json(result);
    },



    'search': (req, res) => {
        db.Product
            .findAll({
                where: {
                    name: {[Op.like]: '%' + req.query.keyword + '%'}
                }
            })
            .then(products => {
                return res.status(200).json(products);
            })
    }
}

module.exports = productsAPIController;