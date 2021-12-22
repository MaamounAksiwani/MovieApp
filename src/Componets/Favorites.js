import React from 'react'
import './Favorites.css';
import {useHistory } from "react-router-dom";
function Favorites() {
    const history = useHistory();
    let movies = JSON.parse(localStorage.getItem("Movies"));
    const deleteMoives = (id)=>{
        let DeleteMovie = localStorage.getItem("Movies");
        movies = JSON.parse(DeleteMovie)
        movies.splice(id, 1);
        localStorage.setItem("Movies", JSON.parse(movies));
    }
    const clear = ()=>{
       let check = window.confirm("Are you sure you want delete all movies?");
       if(check){
        localStorage.clear();
        history.push("/");
       }
    }
    let img = `https://image.tmdb.org/t/p/w1280`;
    return (
        <div className="Favorites">
        <div className="MainPage">
            <div className="container">
                <div className="title-page">
                <h3>Favorites Movies</h3>
                <div>
                    {movies ? (
                        <><span>Favorites Movies ({movies.length})</span> 
                        <button onClick={()=>{clear()}}>clear all</button>
                    </>): <><span> Here's No Favorites Movies To Show</span></>}
                </div>
                </div>
                <div className="row">
                    {movies && movies.map((data)=>{
                        return(
                            <>
                                <div className="col-lg-6 col-md-12 Main-C">
                                <div className="contect-movie">
                                        <div className="row">
                                            <div className="col-md-5">
                                                <img className="" src={ img +data.poster_path} alt='notfound'/>
                                            </div>
                                            <div className="col-md-7">
                                                <h3>{data.original_title}</h3>
                                                <p className="dec-moive">{data.title}</p>
                                                <p>Release_date : {data.release_date}</p>
                                                <p>views : {data.popularity}</p>
                                                <button className="details-delete" onClick={()=>{deleteMoives(data.id)}}>Delete From Favorites</button>
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
        </div>
    )
}

export default Favorites
