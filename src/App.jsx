import {Routes, Route, useNavigate} from 'react-router-dom'

import Header from './components/header/Header'
import Homepage from './layouts/homepage/Homepage'
import Category from './layouts/category/Category'
import Footer from './components/footer/Footer'
import Support from './layouts/support/Support'

import './App.scss'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/category' element={<Category />}/>
        <Route path='/support' element={<Support />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
