import './App.css'
import { Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import ListExpertises from './pages/ListExpertises';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ListExpertises" element={<ListExpertises />} />

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
