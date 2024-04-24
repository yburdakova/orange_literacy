import '../styles/Programs.css'
import { Link } from 'react-router-dom'
import { ProgramCardProps } from '../constants/types'

const ProgramCard = ({title, image, path}: ProgramCardProps) => {
  
  return (
    <Link to={path}>
      <div className="program-card">
        <div className="imgBox">
          <img src={image} alt={title}/>
        </div>
        <div className="title">
          {title}
        </div>
      </div>
    </Link>
  )
}

export default ProgramCard