import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <Router>
        <div className="transition duration-300 ease-in-out dark:bg-zinc-900">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;