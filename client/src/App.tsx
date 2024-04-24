
import './styles/App.css'
import { AboutLayout, Board, Career, Home, MainPage, Mission, News, Partners, Programs, Projects, Record, Staff, Volunteer } from './pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}>
      <Route index element={<MainPage/>} />
      <Route path="news" element={<News/>} />
      <Route path="about" element={<AboutLayout/>}>
        <Route index element={<Mission/>} />
        <Route path="mission" element={<Mission/>} />
        <Route path="board" element={<Board/>} />
        <Route path="staff" element={<Staff/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="partners" element={<Partners/>} />
        <Route path="record" element={<Record/>} />
      </Route>
      <Route path="programs" element={<Programs/>} />
      <Route path="volunteer" element={<Volunteer/>} />
      <Route path="career" element={<Career/>} />
    </Route>
  </Routes>
</BrowserRouter>

  )
}

export default App
