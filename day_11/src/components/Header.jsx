function Header() {
  return (
    <header className="site-header" id="home">
      <nav className="main-nav" aria-label="Main navigation">
        <a href="/home">Home</a>
        <a href="/products">Product</a>
        <a href="mailto:contact@example.com">Contact</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}

export default Header;