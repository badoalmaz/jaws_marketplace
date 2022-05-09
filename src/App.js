import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import CartContextProvider from './contexts/CartContextProvider';
import ProductContexProvider from './contexts/ProductContexProvider';
import MainRoutes from './routes/MainRoutes';
import MainPage from './components/mainpage/MainPage';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContexProvider>
          <CartContextProvider>
            <Navbar />
            <MainRoutes />
            <Footer />
          </CartContextProvider>
        </ProductContexProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
