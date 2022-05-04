import Navbar from './components/navbar/Navbar'
import AuthContextProvider from './contexts/AuthContextProvider';
import ProductContexProvider from './contexts/ProductContexProvider';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContexProvider>
          <Navbar />
          <MainRoutes />
        </ProductContexProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
