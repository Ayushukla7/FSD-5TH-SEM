import Header from './components/Header.jsx';
import Products from './components/Products.jsx';
import Login from '../../day_13/src/Login.jsx';

function App() {
  if (window.location.pathname === '/login') {
    return <Login />;
  }

  return (
    <>
      <Header />
      <Products />
    </>
  );
}

export default App;
