import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div className="bg-[#5579d1] min-h-screen flex items-center justify-center p-6">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Navigate to="/signup" />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App