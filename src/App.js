import { Cart } from "./components/Cart/Cart";
import { Header } from "./components/Header/Header";
import { Products } from "./components/Products/Products";
import { ProductsProvider } from "./contexts/productsContext";

function App() {
  return (
    <div>
      <ProductsProvider>
        <Header />
        <Products />
        <Cart />
      </ProductsProvider>
    </div>
  );
}

export default App;
