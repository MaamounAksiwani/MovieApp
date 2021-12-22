
import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";
import './Main.css';

import { AiFillEye } from 'react-icons/ai';

function Main() {
    const history = useHistory();
    const [move, setMove] = useState([])
    useEffect(()=>{
     axios.get("https://api.themoviedb.org/3/discover/movie?page=1&include_video=false&include_adult=false&sort_by=popularity.desc&language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a").then((res)=>{
            setMove(res.data.results);
        }).catch((err)=>{
            console.log(err)
        })
    },[])

    const viewDetails = (id)=>{
        
        history.push(`/viewDetails/${id}`);
    }
    let img = `https://image.tmdb.org/t/p/w1280`;
    return ( 
        <div className="MainPage">
            <div className="container">
                <h3>Movies</h3>
                <div className="row">
                    {move && move.map((data ,index)=>{
                        return(
                            <>
                                <div className="col-lg-6 col-md-12 Main-C" key={index}>
                                <div className="contect-movie">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img className="" src={ img +data.poster_path} alt='notfound'/>
                                            </div>
                                            <div className="col-md-7">
                                                <h3>{data.original_title}</h3>
                                                <p className="dec-moive">{data.title}</p>
                                                <p>Release_date : {data.release_date}</p>
                                                <p>Views : {data.popularity} <AiFillEye className='eyes'/></p>
                                                <button className="btn-details" onClick={()=>{viewDetails(data.id)}}>More Details</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              
                            </>
                        )
                    })}
                </div>
            </div>
        
        </div>
    )
}

export default Main