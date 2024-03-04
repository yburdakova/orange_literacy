import { Footer, Header } from '../components'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo-full-darkorange.svg'

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
      <div className="bottom_logo">
        <Link to="/">
          <img src={logo} alt="Logo" width={100} />
        </Link>
      </div>
    </>
  )
}

export default Home