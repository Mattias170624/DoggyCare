import './App.css';
import Header from './Comps/Header';
import DogList from './Comps/DogList';
import HomePage from './Comps/HomePage';
import Contact from './Comps/Contact';
import Footer from './Comps/Footer';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Routes>
          <Route exact path="/" element={
            <HomePage />
          } />
          <Route path="/dogList" element={
            <DogList />
          } />
          <Route path="/contact" element={
            <Contact />
          } />
        </Routes>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
