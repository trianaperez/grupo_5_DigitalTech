const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

function getProducts() {
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
	return products;
}

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		const products = getProducts();
		const visited = products.filter(product => product.category === 'visited');
		const inSale = products.filter(product => product.category === 'in-sale');
		res.render('index', { visited, inSale });
	},
};


const categories = [
	{
		id: 1,
		value: 'in-sale',
		model: 'office oferta'
	},
	{
		id: 2,
		value: 'visited',
		model: 'gamer'
	}
];




const control = {
	index: (req, res) => {
		res.render('products', { products: getProducts() });
	},

		detail: (req, res) => {
		const products = getProducts();
		const product = products.find(product => product.id == req.params.id);
		if (!product) {
			return res.render('error', {
				message: 'El producto no existe',
				error: {
					status: 404
				},
				path: req.url
			});
		}
		res.render('detail', { product });
	},

	// Crear
	create: (req, res) => {
		res.render('product-create-form');
	},

	// Almacenar
	store: (req, res) => {
		const products = getProducts();
		const productToCreate = {
			id: products[products.length - 1].id + 1,
			image: 'default-image.png',
			...req.body
		}
		products.push(productToCreate);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Editar
	edit: (req, res) => {
		const products = getProducts();
		const product = products.find(product => product.id == req.params.id);
		res.render('product-edit-form', { productToEdit: product, categories });
	},
	// Actualizar
	update: (req, res) => {
		const products = getProducts();
		const indexProduct = products.findIndex(product => product.id == req.params.id);
		products[indexProduct] = {
			...products[indexProduct],
			...req.body
		};
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	},

	// Borrar
	destroy: (req, res) => {
		const products = getProducts();
		//  Eliminar un elelemtno de un array con filter
		// const productsFiltered = products.filter(products => products.id != req.params.id);
		// fs.writeFileSync(productsFilePath, JSON.stringify(productsFiltered, null, 2));

		//  Eliminar un elelemtno de un array con splice, se debe obtener el id del elemento a eliminar
		const indexProduct = products.findIndex(product => product.id == req.params.id);
		// usando el splice se le pasa el indice del elemento a eliminar y 1 q es la cantidad de elementos a eliminar
		products.splice(indexProduct, 1);
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
		res.redirect('/products');
	}
};


module.exports = controller;