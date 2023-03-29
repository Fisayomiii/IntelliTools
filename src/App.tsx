import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';

function App() {
  return (
    <>
      <div className="transition duration-300 ease-in-out dark:bg-zinc-900">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </Router>
      </div>

    </>
  )
}

export default App;