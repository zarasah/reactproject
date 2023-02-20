import  { Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Selected from './components/Selected';
import Basket from './pages/Basket';
import './App.css';

export default function App() {
  const [orders, setOrders] = useState([]);

  function addToOrder(item) {
    setOrders([...orders, item]);
    // console.log(orders);
  }

  return (
    <div className = "container">
    <Header />
    <div className = "wrapper">
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Home onAdd = {addToOrder} />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/shop" element = {<Shop />}/>
        <Route path = "/blog" element = {<Blog />}/>
        <Route path = "/contact" element = {<Contact />}/>
        <Route path = "/:id" element = {<Selected />}/>
        <Route path = "/basket" element = {<Basket data = {orders}/>}/>
        <Route />
      </Routes>
    </div>
    <Footer />
    </div>
  );
}
