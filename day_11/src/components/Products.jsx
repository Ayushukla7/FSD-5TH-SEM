const products = [
  {
    id: 1,
    name: 'Essence Mascara Lash Princess',
    price: '9.99',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
  },
  {
    id: 2,
    name: 'Eyeshadow Palette with Mirror',
    price: '10.99',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp',
  },
  {
    id: 3,
    name: 'Powder Canister',
    price: '14.99',
    image:
      'https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp',
  },
];

function Products() {
  return (
    <main className="product-grid" id="products">
      {products.map((product) => (
        <article className="product-card" key={product.id}>
          <img className="product-image" src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.price}$</p>
        </article>
      ))}
    </main>
  );
}

export default Products;
