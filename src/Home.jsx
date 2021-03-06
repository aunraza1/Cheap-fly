import React from 'react'
import Header from './components/header'
import About from './components/about'
import Whyus from './components/whyus'
import Video from './components/video'
import Tours from './components/tours'
import Clients from './components/clients'
import {useRef} from 'react'
import {connect} from 'react-redux'


function Home(){




   const scrollToDiv= (ref) =>{
 
    window.scrollTo(0, ref.current.offsetTop);
    
   } 
   const headers=useRef(null)
   const tours =useRef(null)
    
     
    
    return(
        <>
        <Header reference={headers} click={()=>scrollToDiv(tours)}/>
        <About />
        <Whyus/>
        <Video/>
        <Tours reference={tours}/>   
        <Clients/>

       
        </>
    )

}
const mapStateToProps=(state)=>({
  loggedUser:state.loggedUser,
  venderData:state.venderData

})
export default connect(mapStateToProps,null)(Home) 