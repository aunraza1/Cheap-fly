import React from 'react'
import Header from './components/header'
import About from './components/about'
import Whyus from './components/whyus'
import Video from './components/video'
import Tours from './components/tours'
import Clients from './components/clients'
import {useRef} from 'react'
import { useEffect } from 'react'


function Home(){


    useEffect(()=>{
      console.log(headers)
      console.log("Tours=>",tours)

    })

    const scrollToDiv = (ref) => window.scrollTo(0, ref.current.offsetTop);
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
export default Home