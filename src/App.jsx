import { BrowserRouter, Route, Routes } from "react-router-dom";
import MapPage from "./pages/MapPage";
import DetailPage from "./pages/DeatilPage/index";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<MapPage />} />
        <Route path="/detail/:country" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
