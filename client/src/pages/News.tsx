import { NewsItem } from '../components'
import { news } from '../constants/dbdata'
import { NewsProps } from '../constants/types'
import '../styles/NewsPage.css'
import '../styles/App.css'
const News = () => {
  return (
    <div className="main-container">
      <section >
        <div className="container">
          <div className='categories'>
            <div className="catItem">News</div>
            <div className="catItem">Articles</div>
            <div className="catItem">Events</div>
            <div className="catItem">Press Realeses</div>
            <div className="catItem">Student Spotlights</div>
            <div className="catItem">Volunteer Spotlights</div>
            <div className="catItem">Partner Spotlights</div>
          </div>
        </div>
      </section>
      <section className="newsBox">
        <div className="container">
          <div className="newsBox-container">
            { news.map((news: NewsProps) => <NewsItem key={news.title} news={news}/>) }
          </div>
        </div>
      </section>
    </div>
  )
}

export default News