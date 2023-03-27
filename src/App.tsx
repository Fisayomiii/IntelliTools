import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;