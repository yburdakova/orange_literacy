import { MdDoubleArrow } from 'react-icons/md'
import '../styles/MainPage.css'
import { announcement } from '../constants/dbdata'
import { Link } from 'react-router-dom'

const Attention = () => {
  return (
    <section className="hero">
        <div className="attention">
            <Link to={announcement.path}>
            <div className="container">
              <div className="announcement">
                {announcement.text} <span className='arrow-icon'><MdDoubleArrow size={18}/></span>
              </div>
              </div>
            </Link>
          </div>
    </section>
  )
}

export default Attention