import  { Routes, Route } from 'react-router-dom'
import Header from './Header';
import Main from './Main';
import About from './About'
import Sidebar from './Sidebar';
import Footer from './Footer';
import './App.css';

export default function App() {
  return (
    <div className = "container">
    <Header />
    <div className = "wrapper">
      <Sidebar />
      <Routes>
        <Route path = "/" element = {<Main />}/>
        <Route path = "/about" element = {<About />}/>
        <Route />
      </Routes>
    </div>
    <Footer />
    </div>
  );
  // return (
  //   <div className = "container">
  //     <Header />
  //     <div className = "wrapper">
  //       <Main />
  //       <Sidebar />
  //     </div>
  //     <Footer />
  //   </div>
  // )
}
