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
import ProductInfo from './components/product-info';
import SpecificBrands from './components/specific-brand';
import Space from './components/common/space';
import PopularShoes from './components/popular-shoes';
import NeedHelp from './components/need-help';

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Space value={120} />
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/login" exact element={<LoginPage />} />
          <Route path="/home" exact element={<HomePage />} />
          <Route path="/user-details" exact element={<UserDetails />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/:id/info" exact element={<ProductInfo />} />
          <Route path=":id/products" exact element={<SpecificBrands />} />
          <Route path="popular-shoes" exact element={<PopularShoes />} />
          <Route path="help" exact element={<NeedHelp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
