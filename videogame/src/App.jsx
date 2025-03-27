import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Information from "./pages/Information/Information"
import Gallery from "./pages/Gallery/Gallery"
import PolicyConditions from "./pages/PoliticyConditions/PolicyConditions"
import RegisterProducts from "./pages/RegisterProducts/RegisterProducts"
import "./App.css"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/information" element={<Information />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/policyconditions" element={<PolicyConditions />} />
        <Route path="/registerproducts" element={<RegisterProducts />} />
        <Route path="*" element={<Home />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App