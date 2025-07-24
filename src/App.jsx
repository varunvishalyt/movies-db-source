import './css/App.css'
import Favourites from './pages/Favourites'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import { MovieProvider } from './context/movieContext'

function App() {

  return (
    <div>
      <MovieProvider>  
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/fav' element={<Favourites />}></Route>
          </Routes>
        </main>
      </MovieProvider>
    </div>
  )
}

export default App
