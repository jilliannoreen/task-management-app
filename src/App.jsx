import { useState } from 'react'
import React from "react";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/button"
import { Mail } from "lucide-react"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./routes/Home";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>

    </>
  )
}

export default App
