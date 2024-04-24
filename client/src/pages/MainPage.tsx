import { MdDoubleArrow } from 'react-icons/md'
import '../styles/MainPage.css'
import { heroImage } from '../assets'
import { useEffect, useState } from 'react'
import { news } from '../constants/dbdata'
import { NewsProps } from '../constants/types'
import { Attention, EventItem, NewsItem } from '../components'
import { Link } from 'react-router-dom'

const MainPage = () => {
  const [hotNews, setHotNews] = useState<NewsProps[]>([])
  const [events, setEvents] = useState<NewsProps[]>([])

  useEffect(() => {
    const lastNews = news.filter(news => news.category === "News").slice(-3)
    const upcomingEvents = news.filter(news => news.category === "Events").slice(-3)
    setHotNews(lastNews)
    setEvents(upcomingEvents)
  }, [])

  return (
    <div className='main-container'>
      <Attention/>
      <section className="cover">
        <div className="imgBox">
          <img src={heroImage} alt="Orange Literacy Image"/>
        </div>
        <div className="textBox">
          <h1>Welcome to Orange Literacy</h1>
          <p className="subtitle">Orange Literacy is an independent, community-based, volunteer-driven organization dedicated to making literacy available to all. We provide free, individualized literacy instruction to adults who would like to improve their reading, writing, basic math or English language skills.</p>
          <Link to={`/about`} >
            <button>LEARN MORE <span className='arrow-icon'><MdDoubleArrow size={18}/></span></button>
          </Link>
        </div>
        <div className="container">
          <div className="buttonBox" >
            <a className="mainButton" href='https://orangeliteracy.my.site.com/studentapp/s/' target='_blank'>
              BECOME A STUDENT
            </a>
            <a className="mainButton" href='https://docs.google.com/forms/d/e/1FAIpQLSceS9Z14h-RD2E9SY06mcrevCjmYZgEWRkxgEzICsNHkF_HdA/viewform' target='_blank'>
              VOLUNTEER WITH US
            </a>
            <a className="mainButton" href='https://secure.givelively.org/donate/orange-county-literacy-council-inc' target='_blank'>
              MAKE A DONATION
            </a>
          </div>
        </div>
      </section>
      <section >
        <div className="container">
          <div className='hotNews'>
            <div className="hotNews-top">
              <h2 className="section-title">Recent News</h2>
              <Link to={`/news?filterCase=News`} >
                <div className="more-link">more news <span className='arrow-icon'><MdDoubleArrow size={16}/></span></div>
              </Link>
            </div>
          <div className="hotNewsBox">
            {
              hotNews.map((news: NewsProps) => <NewsItem key={news.title} news={news}/>)
            }
          </div>
          </div>
        </div>
      </section>
      <section className="video">
        <div className="container">
          <div className="videoBox">
            <p className="text">
              No one can answer the question “Why Literacy?” better than our students. Listen as each student tells his/her story of struggles, turning points and bright futures.
            </p>
            <div className="video-container">
                <iframe className='videoItem' src="https://www.youtube.com/embed/YZBAdoTQt0k" allowFullScreen></iframe>
                <iframe className='videoItem' src="https://www.youtube.com/embed/JiMsib7Gv-o" allowFullScreen></iframe>
                <iframe className='videoItem' src="https://www.youtube.com/embed/PRQ33jj2a24" allowFullScreen></iframe>
                <iframe className='videoItem' src="https://www.youtube.com/embed/Gsh19yM_0UU" allowFullScreen></iframe>
                <iframe className='videoItem' src="https://www.youtube.com/embed/PMYBla9PZn8" allowFullScreen></iframe>
                <iframe className='videoItem' src="https://www.youtube.com/embed/venfkTRb1qY" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="container">
          <div className='hotNews'>
            <div className="hotNews-top">
              <h2 className="section-title">Upcoming Events</h2>
              <Link to={`/news?filterCase=Events`} >
              <div className="more-link">more events <span className='arrow-icon'><MdDoubleArrow size={16}/></span></div>
              </Link>
            </div>
          <div className="eventsBox">
            {  events.map((news: NewsProps) => <EventItem key={news.title} news={news}/>)  }
          </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MainPage