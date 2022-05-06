import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContexProvider from './contexts/ProductContexProvider';
import MainRoutes from './routes/MainRoutes';
import ThemeRoot from './themeRoot';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContexProvider>
          <CartContextProvider>
            <Navbar />
            <ThemeRoot />
            <MainRoutes />
            <Footer />
          </CartContextProvider>
        </ProductContexProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
