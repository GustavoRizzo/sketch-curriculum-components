import './App.css'
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ListExpertises from './pages/ListExpertises';
import About from './pages/About/Index';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ListExpertises" element={<ListExpertises />} />
          <Route path="About" element={<About />} />

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>

      </div>
    </>
  )
}

export default App
