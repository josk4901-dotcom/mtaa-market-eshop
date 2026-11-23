import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...previousCart,
        { ...product, quantity: 1 },
      ];
    });
  }

  function updateQuantity(id, amount) {
    setCart((previousCart) =>
      previousCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + amount }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar cartCount={cartCount} />

        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<Home addToCart={addToCart} />}
            />

            <Route
              path="/products"
              element={<Products addToCart={addToCart} />}
            />

            <Route
              path="/cart"
              element={
                <Cart
                  cart={cart}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              }
            />

            <Route path="/login" element={<Login />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;