import React from 'react'
import Section1 from '../components/homeComponents/Section1'
import Section2 from '../components/homeComponents/Section2'
import Section3 from '../components/homeComponents/Section3'
import Section4 from '../components/homeComponents/Section4'

const HomeView = () => {
  return (
    <div className="home-view">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
  )
}

export default HomeView
