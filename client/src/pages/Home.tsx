import { Footer, Header } from '../components'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Header/>
      <main>
        <div className="container">
        <Outlet/> 
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Home