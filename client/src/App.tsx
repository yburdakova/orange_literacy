
import './styles/App.css'
import { About, Career, Home, MainPage, News, Programs, Volunteer } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} >
            <Route index element={<MainPage/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/programs" element={<Programs/>} />
            <Route path="/volunteer" element={<Volunteer/>} />
            <Route path="/career" element={<Career/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
