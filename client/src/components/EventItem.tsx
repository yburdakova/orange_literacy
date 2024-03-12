import "../styles/EventItem.css"
import { DataProps, NewsItemProps } from '../constants/types'
import { useState, useEffect } from "react"
import { formatDate } from "../middleware/formatDate"

const EventItem = ({news}: NewsItemProps) => {
  const [newsDate, setNewsDate] = useState<DataProps | null>(null)
  
  useEffect(() => {
    news && 
    news.createdAt && 
    setNewsDate(formatDate(news.eventDate) as DataProps | null)
  }, [news])
  
  return (
    <article className='eventItemBox'>
      <div className="imgBox">
        <img src={news.image} alt="News Image"/>
      </div>
      <div className="eventData">
        <div className="eventInfo"> 
          <div className='eventTitle'>{news.title}</div>
          {news.description &&  <p className="description">{news.description}</p>}
        </div>
        <div className="eventDate">
          <div className="day">{newsDate && newsDate.day} </div>
          <div className="month">{newsDate && newsDate.month} </div>
          <div className="time">{newsDate && `${newsDate.hours}:${newsDate.minutes}`} </div>
        </div>
      </div>
      
    </article>
  )
}

export default EventItem