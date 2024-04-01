import '../styles/NewsItem.css'
import { DataProps, NewsItemProps } from '../constants/types'
import { useEffect, useState } from 'react'
import { formatDate } from '../middleware/formatDate/formatDate'

const NewsItem = ({news}: NewsItemProps) => {
  const [newsDate, setNewsDate] = useState<DataProps | null>(null)
  
  useEffect(() => {
    news && 
    news.createdAt && 
    setNewsDate(formatDate(news.createdAt) as DataProps | null)
  }, [news])

  return (
    <article className='newsItemBox'>
      <div className="imgBox">
        <img src={news.image} alt="News Image"/>
      </div>
      <div className="newsInfo"> 
        <div className='newsTitle'>{news.title}</div>
        <div className="newsData">{newsDate && `${newsDate.month} ${newsDate.day}, ${newsDate.year}`}  / {news.category}</div>
      </div>
    </article>
  )
}

export default NewsItem