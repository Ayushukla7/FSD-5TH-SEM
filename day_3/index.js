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
        image.alt = product.title;

        const title = document.createElement('h1');
        title.textContent = product.title;

        const price = document.createElement('h2');
        price.textContent = `$${product.price.toFixed(2)}`;

        const incrementBtn = document.createElement('button');
        incrementBtn.textContent = '+';

        const decrementBtn = document.createElement('button');
        decrementBtn.textContent = '-'; 

        const span = document.createElement('span');
        span.innerText = "ADD TO CART";

        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(price);
        div.appendChild(incrementBtn);
        div.appendChild(decrementBtn);
        div.appendChild(span);
        products.appendChild(div);
    });
    
}
getProductData();