import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'
import Home from './pages/home/Home'
import Link1 from './components/products/Link1'
import Link2 from './components/products/Link2'
import Link3 from './components/products/Link3'
import Link4 from './components/products/Link4'
import Footer from './components/footer/Footer'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>
          <Route path='link1' element={<Link1/>}/>
          <Route path='link2' element={<Link2/>}/>
          <Route path='link3' element={<Link3/>}/>
          <Route path='link4' element={<Link4/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
