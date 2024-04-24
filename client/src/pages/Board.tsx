import { border } from "../constants/dbdata"
import '../styles/InfoPage.css'

const Board = () => {
  return (
    <div className='infoBox-main'>
      <h2>BOARD OF DIRECTORS</h2>
      {border.map(persona =>
        <div className="personaBox">
          <div className="persona-img">
            <img src={persona.image} alt=""/>
          </div>
          <div className="persona-text">
            <div className="persona-position">{persona.position}</div>
            <div className="persona-name">{persona.name}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Board