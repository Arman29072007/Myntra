
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ProductList from './Components/ProductList';
import CategoryPage from './Components/CategoryPage';
import { CartProvider } from './Components/CartContext';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
// import Cart from './Components/Cart';


function App() {
  return (
    <CartProvider>
      <Container>
      <Router>
        <Header />
        <Banner />
        <Container>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
      </Container>
    </CartProvider>
  );
}

export default App;
