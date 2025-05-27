// App.jsx
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ProductView from './pages/Product/ProductView';
import SellProduct from './pages/SellProduct/SellProduct';
import ProtectedRoute from './components/ProtectedRoute';
import LoginModal from './components/LoginModal/LoginModal';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser)
    })
    return ()=> unSubscribe()
  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home setIsLogin={setIsLogin} />} />
        <Route path="/product/:id" element={<ProductView user={user} setIsLogin={setIsLogin}/>} />
        <Route
          path="/sellProduct"
          element={
            <ProtectedRoute setIsLogin={setIsLogin}>
              <SellProduct />
            </ProtectedRoute>
          }
        />
      </Routes>
      {isLogin && <LoginModal setIsLogin={setIsLogin} />}
    </>
  );
};

export default App;
