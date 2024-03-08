import '../styles/NewsItem.css'
import { NewsItemProps } from '../constants/types'

const NewsItem = ({news}: NewsItemProps) => {
  return (
    <article className='newsItemBox'>
      <div className="imgBox">
        <img src={news.image} alt="News Image"/>
      </div>
      <div className="newsInfo"> 
        <div className='newsTitle'>{news.title}</div>
        <div className="newsData">{news.createdAt} / {news.category}</div>
      </div>

    </article>
  )
}

export default NewsItem