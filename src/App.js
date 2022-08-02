import {BrowserRouter, Routes, Router, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './pages/Contact'
import About from './pages/About'
import Category from './pages/Category';
import Recipe from './pages/Recipe'
import NotFound from './pages/NotFound';

const App = () => {
  return (
   <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element = {<Home/>}/>
            <Route path='/about' element = {<About/>}/>
            <Route path='/contact' element = {<Contact/>}/>
            <Route path='/category/:name' element = {<Category/>}/>
            <Route path='/recipe/:id' element = {<Recipe/>}/>
            <Route path='*' element = {<NotFound/>}/>
        </Routes>

        <Footer/>
   </BrowserRouter>
  )
}

export default App