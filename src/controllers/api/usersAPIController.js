const db = require('../../database/models');
const Op = db.Sequelize.Op;


const usersAPIController = {
    'list': async (req, res) => {
        const count = await db.User.count();
        // const roles = await db.Role.findAll();
        console.log(count);

        const users = await db.User.findAll({
            attributes: ['id', 'first_name', 'last_name', 'email', 'avatar_url'],
            include: [{
                model: db.Role,
                as: 'role',
                attributes: ['name']
            },
            {
                model: db.Cart,
                as: 'cart',
                attributes: ['total'],
                include: [{
                    model: db.Item,
                    as: 'item',
                    attributes: ['id', 'quantity'],
                    include: [{
                        model: db.Product,
                        as: 'product',
                        attributes: ['id', 'name', 'price']
                    }]
                }]
            }]
        })

        const userArray = users.map(user => {
            const detailUrl = `/api/users/${user.id}`;
            const role = user.role ? user.role.name : 'Customer';
            const total = !user.cart ? user.cart.total : 0;
            const cartItems = !user.cart ? user.cart.items : [];
            console.log(total);
            const producstInCart = cartItems.map(item => {
                const { id, quantity } = item;
                const { name, price, description } = product;

                return
                {
                    id,
                    quantity,
                    name,
                    price,
                    description
                };
            });

            return {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: role,
                total: total,
                cartItems: producstInCart,
            }
        })

        const result = {
            meta: {
                status: 200,
                count: count,
            },
            data: userArray
        };

        res.json(result);
    },

    'detail': async (req, res) => {
        const count = await db.User.count();
        const roles = await db.Role.findAll();
        console.log(count);

        const user = await db.User.findByPk(req.params.id, {
            attributes: ['id', 'firstName', 'lastNname', 'email'],
            include: [{
                model: db.Role,
                as: 'role',
                attributes: ['name']
            },
            {
                model: db.Cart,
                as: 'cart',
                attributes: ['total'],
                include: [{
                    model: db.Item,
                    as: 'item',
                    attributes: ['id', 'quantity'],
                    include: [{
                        model: db.Product,
                        as: 'product',
                        attributes: ['id', 'name', 'price', 'model']
                    }]
                }]
            }]
        })

        if (!user) {
            return res.status(404).json({ error: 'El producto no existe' });
        }



        const role = user.role ? user.role.name : 'Visitor';
        const total = !user.cart ? user.cart.total : 0;
        const cartItems = !user.cart ? user.cart.items : [];

        const producstInCart = cartItems.map(item => {
            const { id, quantity } = item;
            const { name, price, description } = product;

            return
            {
                id,
                    quantity,
                    name,
                    price,
                    description
            };
        });

        const userData = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: role,
            total: total,
            cartItems: producstInCart,
            avatarUrl: user.avatarUrl,
        }


        const result = {
            meta: {
                status: 200,
                count: count,
            },
            data: userData
        };


        res.json(result);
    },

    'search': (req, res) => {
        db.User
            .findAll({
                where: {
                    name: { [Op.like]: '%' + req.query.keyword + '%' }
                }
            })
            .then(users => {
                return res.status(200).json(users);
            })
    }
}

module.exports = usersAPIController;