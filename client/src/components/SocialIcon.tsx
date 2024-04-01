
import { SocialIconProps } from '../constants/types'

const SocialIcon = ({icon, url, title}: SocialIconProps) => {

  return (
    <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`Go to ${title}`}>
      <div className='ss_container'>{icon}</div>
    </a>
    
  )
}

export default SocialIcon