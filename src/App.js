// import { Navbar } from "react-bootstrap";
import Navbar from "./components/navbar/Navbar";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <AuthContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
        </ProductContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
