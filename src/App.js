import Navbar from './components/navbar/Navbar';
import AuthContextProvider from './contexts/AuthContextProvider';
import MainRoutes from './routes/MainRoutes';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <MainRoutes />
      </AuthContextProvider>
    </>
  );
}

export default App;
