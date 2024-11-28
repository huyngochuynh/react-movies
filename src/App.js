import "./App.css";
import Navbar from './components/Navbar/Navbar';
import Search from "./components/Pages/Search";
import Home from "./components/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/Pages/MovieDetails"

function App () {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{ paddingTop: '80px', backgroundColor: 'black' }}>
          <Routes>
            <Route exact path = '/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;