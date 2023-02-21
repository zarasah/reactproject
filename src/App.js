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
import Featured from './components/Featured';
import './App.css';

export default function App() {
  const [orders, setOrders] = useState([]);
  let [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  function counter() {
    count++;
    setCount(count);
  }

  function addToOrder(item) {
    counter();
    const newItem = {...item};
    const price = item.price;

    if (orders.length === 0) {
      newItem.count = 1;
      setOrders([newItem]);
    } else {
      for (let i = 0; i < orders.length; i++) {
        if (newItem.id === orders[i].id) {
          orders[i].count += 1;
          orders[i].price = orders[i].count * price ;
          setOrders([...orders]);
          break;
        }
        newItem.count = 1;
        setOrders([...orders, newItem]);
      }
    }
  }

  function addToHistory(item) {
    if (history.length === 0) {
      setHistory([item, ...history]);
    }

    for (let element of history) {
      if (item.id === element.id) {
        setHistory([...history]);
        break;
      }
      setHistory([item, ...history]);
    }
  }

  return (
    <div className = "container">
    <Header count = {count}/>
    <div className = "wrapper">
      <div className = 'side'>
        <Sidebar />
        <Featured data = {history}/>
      </div>
      <Routes>
        <Route path = "/" element = {<Home onAdd = {addToOrder} onHistory = {addToHistory}/>}/>
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
