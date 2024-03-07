import { MdDoubleArrow } from 'react-icons/md'
import '../styles/MainPage.css'
import { heroImage } from '../assets'

const MainPage = () => {
  return (
    <div>
      <section className="hero">
        <div className="attention">
          <div className="container">
            <div className="announcement">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam impedit libero natus in velit. Cor <span className='announcement-icon'><MdDoubleArrow size={18}/></span>
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
          <button>LEARN MORE</button>
        </div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam impedit libero natus in velit. Corrupti totam natus expedita laborum rem consequatur exercitationem ut consectetur ipsum sequi deleniti sunt, excepturi et est eius tempora laudantium labore quod reprehenderit, dolorem assumenda non mollitia? Neque, officia molestiae? Vero ipsa eaque quos? Excepturi obcaecati ab odit cum ratione dicta eius necessitatibus eligendi corporis, quia at quasi cupiditate nesciunt ex modi repudiandae quisquam. Optio tempore nostrum nemo non. Fuga natus odio, voluptatem incidunt tempore iure porro, aspernatur in pariatur, sequi quas. Obcaecati iusto architecto impedit voluptate unde quibusdam quas, dolorum at? Temporibus ad reiciendis reprehenderit laudantium in animi voluptates itaque dolor harum quo! Laborum suscipit voluptate nostrum odio itaque blanditiis minima modi vitae culpa neque iure maiores, error, voluptatibus repellendus? Eius quos adipisci excepturi nulla, tempora natus aperiam quasi laborum a aut! Expedita deleniti, quaerat ex nihil similique illo qui dolores possimus
      </section>
    </div>
  )
}

export default MainPage