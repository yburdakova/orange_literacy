import { useEffect, useState } from 'react'
import { NewsItem } from '../components'
import { news } from '../constants/dbdata'
import { NewsProps } from '../constants/types'
import '../styles/NewsPage.css'
import '../styles/App.css'
import { useLocation } from 'react-router-dom';

const cats = [
  "All", "News", "Articles", "Events", "Press Realeses", "Student Spotlights", "Volunteer Spotlights", "Partner Spotlights"
]

const News = () => {

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const filterCase = params.get('filterCase');

  const initialActive = filterCase || "All";
  console.log(initialActive)


  const [active, setActive] = useState(initialActive);
  const [shownNews, setShownNews] = useState(news)
  const [empty, setEmpty] = useState(false)

  const handleClickActiveCat = (category: string) => {
    setActive(category)
  }

  useEffect(() => {
    if (!(active === "All")) {
      const filtredNews = news.filter(news => news.category === active)
      setShownNews(filtredNews)
      shownNews.length ? setEmpty(false) :  setEmpty(true)
    } else (setShownNews(news))
  },[active])

  useEffect(() => {
    setEmpty(shownNews.length === 0);
  }, [shownNews]);
  
  return (
    <div className="main-container">
      <section >
        <div className="container">
          <div className='categories'>
            {
              cats.map(cat => <div className={`catItem ${active==cat ? "activeCat" : ""}`} onClick={()=>handleClickActiveCat(cat)} key={cat} >{cat}</div>)
            }
          </div>
        </div>
      </section>
      <section className="newsBox">
        <div className="container">
          <div className="newsBox-container">
            { shownNews.map((news: NewsProps, item) => <NewsItem key={`${news.title}-${item}`} news={news}/>) }
            { empty && <div>There is no imformation in this category</div> }
          </div>
        </div>
      </section>
    </div>
  )
}

export default News