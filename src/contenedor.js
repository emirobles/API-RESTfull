class Contenedor {
    constructor(route) {
        this.route = route;
        this.products = [];
    }

    getAll() {
        return this.products;
    }
    save(obj) {
        obj.id = !this.products.length ? 1 : parseInt(this.products[this.products.length - 1].id) + 1;
        this.products.push(obj);
        return obj
    }

    getById(id) {
        return this.products.find((product) => product.id == id);
    }

    updateProduct(id, obj) {
        const productIndex = this.products.findIndex(product => product.id == id);

        if (productIndex != -1) {
            this.products[productIndex].title = obj.title || this.products[productIndex].title;
            this.products[productIndex].price = obj.price || this.products[productIndex].price;
            this.products[productIndex].thumbnail = obj.thumbnail || this.products[productIndex].thumbnail;
            return this.products[productIndex];
        }
        return false;
    }

    deleteById(id) {
        const index = this.products.findIndex(prod => prod.id == id)
        if (index != -1) {
            this.products = this.products.filter((product) => (product.id != id));
            return true
        }
        return false
    }
}

const products = new Contenedor('./src/products.txt');

products.save({ title: 'Shinobu figure', price: 5500.50, thumbnail: 'https://somoskudasai.com/wp-content/uploads/2020/08/EfrSIJdU0AYh08a.jpg'})
products.save({ title: 'Asuka figure', price: 12800.90, thumbnail: 'https://somoskudasai.com/wp-content/uploads/2021/12/1-9.jpg' })
products.save({ title: 'Gojo figure', price: 15800.90, thumbnail: 'https://anime-figure.com/static/images/thumbs/xl/df5916725df32b8910390a85a7490d7ece5e1173.jpg' })

module.exports = products;