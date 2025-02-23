import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Shorts from "./Components/NavbarComponents/Shorts";
import Subscriptions from "./Components/NavbarComponents/Subscriptions";
import User from "./Components/NavbarComponents/User";
import History from "./Components/NavbarComponents/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/Shorts" element={<Shorts />} />
      </Routes>
      <Routes>
        <Route path="/Subscriptions" element={<Subscriptions />} />
      </Routes>
      <Routes>
        <Route path="/User" element={<User />} />
      </Routes>
      <Routes>
        <Route path="/History" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
