import "./styles/styles";
import PricePage from "./pages/PricePage";
import CheckoutPage from "./pages/CheckoutPage";
import Success from "./pages/Success";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<PricePage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="success" element={<Success />} />
    </Routes>
  );
}

export default App;
