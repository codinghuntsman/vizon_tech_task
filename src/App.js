import { Route, Routes } from "react-router-dom";
import "./App.css";
import Club from "./Components/Club/Club";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import HomeBody from "./Components/HomeBody/HomeBody";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Product from "./Components/Product/Product";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomeBody></HomeBody>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/club" element={<Club></Club>}></Route>
        <Route path="/get" element={<GetInTouch></GetInTouch>}></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
