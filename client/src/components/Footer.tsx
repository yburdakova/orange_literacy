import '../styles/Footer.css'
import { socialIcons } from '../constants/socials_icons'
import { SocialIcon } from '.'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { LuPhone } from 'react-icons/lu'
import { MdOutlineWatchLater } from 'react-icons/md'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-container">
          <div className="footer-section">
            <h4>FOLLOW US</h4>
            <div className="socials">
              {socialIcons.map((socialnet ) => 
                <SocialIcon icon={socialnet.icon} url={socialnet.url} title={socialnet.title} key={socialnet.title}/>
              )}
            </div>
            <h4>Orange Literacy</h4>
            <div className="contactItem">
              <a href="https://maps.app.goo.gl/kVfrasd74NdYbwMG9" target="_blank" rel="noopener noreferrer" aria-label="Open mark on the Google Maps">
                <div className="contactItem_icon"><FaMapMarkerAlt /></div>
                <div className="contactItem_text">307 W. Weaver Street, Carrboro, NC 27510</div>
              </a>
              <a href="mailto:oclc@orangeliteracy.org" target="_blank" rel="noopener noreferrer" aria-label="Email to Orange Literacy">
                <div className="contactItem_icon"><HiOutlineMail /></div>
                <div className="contactItem_text">oclc@orangeliteracy.org</div>
              </a>
              <a href="tel:+19199146153" target="_blank" rel="noopener noreferrer" aria-label="Call to Orange Literacy">
                <div className="contactItem_icon"><LuPhone /></div>
                <div className="contactItem_text">(919) 914-6153</div>
              </a>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-section">
            <h4>SIGN UP FOR OUR NEWSLETTER</h4>
            <form className='subscribe-form'>
              <label>
                Full name
                <input type="text" required/>
              </label>
              <label>
                Email
                <input type="text" required/>
              </label>
              <button>Sign Up</button>
            </form>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-section">
            <div className="footerRow linehight">
              Orange Literacy is a non-profit organization.<br />  EIN number XX-XXXXXXX
            </div>
            
            <div className="footerRow">
              <div className="footerColumn">
                <div className="contactItem_icon"><MdOutlineWatchLater /></div>
                <div className="contactItem_hours">
                  Sunday: Closed <br />
                  Monday-Thursday: 9-8 PM<br />
                  Friday: 9-5 PM<br />
                  Saturday: Closed
                </div>
              </div>
              
            </div>
            <div className="footerRow linehight">
            © 2024 Orange Literacy. <br /> All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer