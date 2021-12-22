import React from 'react';
import './Nav.css'
import { GoSearch } from 'react-icons/go';
import { useHistory } from "react-router-dom";

import { BsFillMoonFill ,BsFillSunFill } from 'react-icons/bs';

function Nav() {
    let darkMode = window.localStorage.getItem("darkMode");
    const enabled = ()=>{
        document.documentElement.classList.add("darkmood");
        // document.body.style.backgroundColor = "red";
        window.localStorage.setItem("darkMode" , "enabled");
      
    }
    const unenabled = ()=>{
        document.documentElement.classList.remove("darkmood");
        // document.body.style.backgroundColor = "pink";
        window.localStorage.setItem("darkMode" , null);
    }
    if(darkMode === "enabled"){
        enabled();
    }else{
        unenabled();
    }
     const changeMood = ()=>{
        darkMode = window.localStorage.getItem("darkMode");
        if(darkMode !== "enabled"){
            enabled();
        }else{
            unenabled();
        }
    }
    
    const history = useHistory();
    return (
        <div className="nav-bar">
            <div className="container">
                
            <div className="logo" onClick={() => history.push("/")}>
               MMDB
           </div>
           {/* <div className="search">
               <input type="search" className="" placeholder="Search Here ... "/>
               <GoSearch className='icon'/>
           </div> */}
            <ul className=''>
                <li onClick={() => history.push("/Favorites")}>Favorites </li>
                <li className='changeMood'onClick={() => changeMood()}><BsFillMoonFill  className='Mood'/> <BsFillSunFill className='MoodSun'/></li>
            </ul>
           
            </div>
            <hr></hr>
        </div>
    )
}

export default Nav
