import React, { lazy, Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import LoginModal from './components/LoginModal/LoginModal';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import useProducts from './Hooks/useProducts';
import HomeShimmer from "./components/Shimmer/HomeShimmer"

const Home = lazy(()=> import("./pages/Home/Home"))
const SellProduct = lazy(()=> import("./pages/SellProduct/SellProduct"))
const ProductView = lazy(() => import("./pages/Product/ProductView"))
const MyAds = lazy(() => import("./pages/Myadds/MyAdds"))

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null)

  const productState = useProducts()

  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser) =>{
      setUser(currentUser)
    })
    return ()=> unSubscribe()
  },[])

  return (
    <>
    <Suspense fallback={<div></div>}>
      <Routes>
        <Route
          path="/"
          element={
          <Home {...productState} setIsLogin={setIsLogin} />} 
        />
        <Route
          path="/product/:id" 
          element={
          <ProductView user={user} setIsLogin={setIsLogin}/>} 
        />
        <Route
          path="/sellProduct"
          element={
            <ProtectedRoute setIsLogin={setIsLogin}>
              <SellProduct />
            </ProtectedRoute>
          }
        />
        <Route path='/myAdds' element={
          <ProtectedRoute>
            <MyAds/>
          </ProtectedRoute>
        }/>
        <Route path='/edit-add/:id' element={
          <ProtectedRoute>
            <SellProduct/>
          </ProtectedRoute>
        }/>
      </Routes>
      </Suspense>
      {isLogin && <LoginModal setIsLogin={setIsLogin} />}
    </>
  );
};

export default App;
