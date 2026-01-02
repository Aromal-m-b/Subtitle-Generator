import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Aromal from './pages/Gen'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Aromal />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App