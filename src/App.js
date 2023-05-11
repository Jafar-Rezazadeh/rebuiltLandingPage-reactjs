import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/home/home";
import NavBar from "./components/nabBar/navBar";
import SearchPage from "./routes/search/search";
import Footer from "./components/footer/footer";
function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
