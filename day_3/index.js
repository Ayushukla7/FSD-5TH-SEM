const products = document.getElementById('products');
let productData = [];

const getProductData = async () => {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    productsData = data.products;
    console.log(productsData);

    productsData.map((product) => {
        const div = document.createElement('div');
        const image = document.createElement('img');
        image.src = product.thumbnail;
        const title = document.createElement('h1');
        const price = document.createElement('h2');
        const incrementBtn = document.createElement('button');
        const decrementBtn = document.createElement('button');
        const span = document.createElement('span');
    });
    
}
getProductData();