import './App.css'
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ListExpertises from './pages/ListExpertises';
import About from './pages/About';
import CareerTimeline from './pages/CareerTimeline';


function App() {
  const base = import.meta.env.BASE_URL;

  return (
    <>
      <div className='container'>
        <Routes>
          <Route path={`${base}`} element={<Home />} />
          <Route path={`${base}ListExpertises`} element={<ListExpertises />} />
          <Route path={`${base}About`} element={<About />} />
          <Route path={`${base}CareerTimeline`} element={<CareerTimeline />} />

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
