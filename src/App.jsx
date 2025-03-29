import { Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Registration from './components/custom/Registration'


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/plans" element={<div>Our Plans</div>} />
        <Route path="/team" element={<div>Our Team</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
        <Route path="/reviews" element={<div>Reviews</div>} />
        <Route path="/contact" element={<div>Contact Us</div>} />
      </Routes>
    </Layout>
  )
}

export default App

