/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from '@emotion/react';
import LoginPage from './components/login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './components/home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/login" exact element={<LoginPage />} />
        <Route path="/home" exact element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
