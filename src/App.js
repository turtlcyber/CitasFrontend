import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Routs from './component/Routs';
import Footer from './Footer/footer';
function App() {
  // const token = localStorage.getItem('accessToken');
  // if (!token) {
  //   return <Signin />
  // }
  return (
    <div className="wrapper">
      <Navbar />
      <Routs />
      <Footer />
    </div>
  );
}

export default App;