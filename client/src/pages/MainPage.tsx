import { MdDoubleArrow } from 'react-icons/md'
import '../styles/MainPage.css'
import { heroImage } from '../assets'
import { useEffect, useState } from 'react'
import { news } from '../constants/dbdata'
import { NewsProps } from '../constants/types'
import { NewsItem } from '../components'

const MainPage = () => {
  const [hotNews, setHotNews] = useState<NewsProps[]>([])

  useEffect(() => {
    const lastNews = news.filter(news => news.category === "News").slice(-3)
    setHotNews(lastNews)
    
  }, [])

  return (
    <div className='main-container'>
      <section className="hero">
        <div className="attention">
          <div className="container">
            <div className="announcement">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam impedit libero natus in velit. Cor <span className='arrow-icon'><MdDoubleArrow size={18}/></span>
            </div>
          </div>
        </div>
      </section>
      <section className="cover">
        <div className="imgBox">
          <img src={heroImage} alt="Orange Literacy Image"/>
        </div>
        <div className="textBox">
          <h1>Welcome to Orange Literacy</h1>
          <p className="subtitle">Orange Literacy is an independent, community-based, volunteer-driven organization dedicated to making literacy available to all. We provide free, individualized literacy instruction to adults who would like to improve their reading, writing, basic math or English language skills.</p>
          <button>LEARN MORE <span className='arrow-icon'><MdDoubleArrow size={18}/></span></button>
        </div>
        <div className="container">
          <div className="buttonBox">
            <div className="mainButton">
              BECOME A STUDENT
            </div>
            <div className="mainButton">
              VOLUNTEER WITH US
            </div>
            <div className="mainButton">
              MAKE A DONATION
            </div>
            <div className="mainButton">
              GIVE
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="container">
          <div className='hotNews'>
            <div className="hotNews-top">
              <h2 className="section-title">Recent News</h2>
              <div className="more-link">more news <span className='arrow-icon'><MdDoubleArrow size={16}/></span></div>
            </div>
          
          <div className="hotNewsBox">
            {
              hotNews.map((news: NewsProps) => <NewsItem key={news.title} news={news}/>)
            }
          </div>
          </div>
          
        </div>
        
      </section>
    </div>
  )
}

export default MainPage