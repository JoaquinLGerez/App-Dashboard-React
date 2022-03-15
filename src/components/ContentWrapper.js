import React from 'react'
import Footer from './Footer'
import TopBar from './TopBar'
import ContetRowTop from './contetRowTop'
import Table from './Table'
const ContentWrapper = () => {
  return (
    <div id="content-wrapper" className="d-flex flex-column">
  
    <div id="content">

    <TopBar/>
      
    <ContetRowTop/>
        <Table/>

  
      </div>

    <Footer/>

  </div>  )
}

export default ContentWrapper