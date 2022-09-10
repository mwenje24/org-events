// import { createEvent } from '@testing-library/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Categories from './components/categories/Categories';
import CreateEvent from './components/categories/CreateEvent';
import Header from './components/Header'
import Home from './components/home/Home';
import Login from './components/categories/Login';
import CreateAccount from './components/categories/CreateAccount';
import Trending from './components/trending/Trending';
import MyEvents from './components/trending/MyEvents';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/trends" element={<Trending />}></Route>
        <Route exact path="/categories" element={<Categories />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/create-event/:userId" element={<CreateEvent />}></Route>
        <Route exact path="/create-account" element={<CreateAccount />}></Route>
        <Route exact path="/myevents/:userId" element={<MyEvents />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
