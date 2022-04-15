import './App.css';
import Header from './Comps/Header';
import DogList from './Comps/DogList';
import HomePage from './Comps/HomePage';
import Contact from './Comps/Contact';
import Footer from './Comps/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={
              <div>
                <Header />
                <HomePage />
                <Footer />
              </div>
            } />
            <Route path="/dogList" element={
              <div>
                <Header />
                <DogList />
                <Footer />
              </div>
            } />
            <Route exact path="/contact" element={
              <div>
                <Header />
                <Contact />
                <Footer />
              </div>
            } />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
