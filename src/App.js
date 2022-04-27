import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Pages/Accounts/Login';
import Register from './components/Pages/Accounts/Register';
import Footer from './components/Inc/Footer/Footer';
import Header from './components/Inc/Header/Header';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import RequireAuth from './utility/RequireAuth';
import Service from './components/Pages/Service/Service';
import ScrollButton from './utility/ScrollButton';
import NotFound from './utility/NotFound';

function App() {
  return (
    <div className='relative'>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="/service/:id" element={<RequireAuth>
              <Service />
            </RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          
          <ScrollButton />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
