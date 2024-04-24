import '../styles/MainPage.css'
import '../styles/Programs.css'
import { programs } from "../constants/dbdata"
import { Attention, ProgramCard } from "../components"
import { ProgramCardProps } from "../constants/types"

const Programs = () => {
  return (
    <div className="main-container">
      <Attention/>
      <section>
        <div className="container">
          <div className="programs-info">
            <h2 className="title-programs">Free classes and tutoring for adults and families </h2>
            <p className="text-programs">Orange Literacy offers free, personalized learning. Our literacy programs focus on College and Career Readiness, English Language Learning, Children and Families, and Building Community Capacity. Explore our educational programs and sign up for a class, become a volunteer, or make a donation. Thank you for creating better lives through learning.</p>
          </div>
          </div>
        <div className="buttonBox progButtons" >
            <a className="mainButton prog-button" href='https://orangeliteracy.my.site.com/studentapp/s/' target='_blank'>
              BECOME A STUDENT
            </a>
            <a className="mainButton prog-button" href='https://docs.google.com/forms/d/e/1FAIpQLSceS9Z14h-RD2E9SY06mcrevCjmYZgEWRkxgEzICsNHkF_HdA/viewform' target='_blank'>
              VOLUNTEER WITH US
            </a>
            <a className="mainButton prog-button" href='https://secure.givelively.org/donate/orange-county-literacy-council-inc' target='_blank'>
              MAKE A DONATION
            </a>
          </div>
      </section>
      <section>
        <div className="container">
          <div className="cardsBox">
              {programs.map((program: ProgramCardProps) =>
                <ProgramCard title={program.title} path={program.path} image={program.image} key={program.title}/>
              )}
          </div>
        </div>
      </section>
    </div>
  )
}


export default Programs