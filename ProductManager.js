class ProductManager {
    constructor() {
        this.products = [];
        this.productIdCounter = 1;
    }

    getProducts() {
        return this.products;
    }

    addProduct({ title, description, price, thumbnail, code, stock }) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios");
        }

        if (this.products.some(product => product.code === code)) {
            throw new Error("El código del producto ya está en uso");
        }

        const newProduct = {
            id: this.productIdCounter++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}

const productManager = new ProductManager();

console.log(productManager.getProducts());


try {
    productManager.addProduct({
        title: "Crema de rostro",
        description: "Una crema Facial con un 98,6% de ingredientes de origen natural para descubrir una piel más tersa por la mañana.",
        price: 31.000,
        thumbnail: "Sin imagen",
        code: "#01",
        stock: 25
    });
    console.log("Producto agregado exitosamente");
} catch (error) {
    console.error("Error al agregar el producto:", error.message);
}

console.log(productManager.getProducts());

try {
    productManager.addProduct({
        title: "",
        description: "Este es otro producto repetido",
        price: 150,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 10
    });
    console.log("Producto repetido agregado exitosamente");
} catch (error) {
    console.error("Error al agregar el producto repetido:", error.message);
}

try {
    const productId = 11;
    const foundProduct = productManager.getProductById(productId);
    console.log("Producto encontrado:", foundProduct);
} catch (error) {
    console.error("Error al obtener el producto por ID:", error.message);
}