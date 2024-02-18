/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import LoginPage from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/home'
import UserDetails from './components/user-details';
import Header from './components/common/header';
import AboutUs from './components/about-us';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/user-details" exact element={<UserDetails />} />
          <Route path="/about-us" exact element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
