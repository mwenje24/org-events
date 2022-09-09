import { createEvent } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Categories from './components/categories/Categories';
import CreateEvent from './components/categories/CreateEvent';
import Header from './components/Header'
import Home from './components/home/Home';
import Trending from './components/trending/Trending';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/trends" element={<Trending />}></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route exact path="/create-event" element={<CreateEvent />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
