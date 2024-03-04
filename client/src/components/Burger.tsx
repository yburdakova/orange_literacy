import React, { useState } from 'react'
import '../styles/Header.css'

const Burger = () => {
  const [toggled, setToggled] = useState(false);
  
  return (
    <section>
    <div className={`burger burger1 ${toggled ? 'toggled' : 'unToggled'}`}
      onClick={() => setToggled(!toggled)}>
      <div></div>
    </div>
  </section>
  )
}

export default Burger