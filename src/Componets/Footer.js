
import React, { useState, useEffect } from "react";
import './Footer.css';
import axios from 'axios'

import { useHistory } from "react-router-dom";

function Footer() {


    const viewInfoMovie = (id)=>{
        history.push(`/viewDetails/${id}`);
    }
    const history = useHistory();
    const [showmovies, setShowmovies] = useState([])
    useEffect(()=>{
     axios.get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a").then((res)=>{
        setShowmovies(res.data.results);
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    return (
        <footer>
            <div className="container">
                <div className="row">
                <div className="col-lg-3 col-md-6">
                <ul className="info-page">
                    <li className="logo-name">MMDB</li>
                    <li>Home</li>
                    <li>About</li>
                </ul>
                </div>

                <div className="col-lg-3 col-md-6">
                <ul className='first-list'>
                    <li>Moives</li>
                   {showmovies && showmovies.map((ele)=>{
                       return (
                           <li onClick={()=>{viewInfoMovie(ele.id)}}>{ele.original_title}</li>
                       )
                   })}
                </ul>
                </div>

                <div className='col-lg-3 col-md-6'>
                        
                <ul className='Sec-list'>
                    <li>Moives</li>
                   {showmovies && showmovies.map((ele)=>{
                       return (
                           <li onClick={()=>{viewInfoMovie(ele.id)}}>{ele.original_title}</li>
                       )
                   })}
                  
                </ul>
                </div>

                <div className='col-lg-3 col-md-6'>
                <ul className='third-list'>
                    <li>Moives</li>
                   {showmovies && showmovies.map((ele)=>{
                       return (
                           <li onClick={()=>{viewInfoMovie(ele.id)}}>{ele.original_title}</li>
                       )
                   })}
                  
                </ul>

                </div>


                </div>
            </div>
            
        </footer>
    )
}

export default Footer