import React, { useState, useEffect } from "react";
import './ViewDetails.css';
import { useParams , useHistory } from "react-router-dom";
import axios from "axios";
function ViewDetails() {
    document.querySelectorAll(".inverted").forEach((result)=>{
        result.classList.toggle("invert")
    })
    const history = useHistory();
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`).then((res)=>{
             setMovie(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[id])
    
    let listArr = [];
    
    const addToFavorite = (obj)=>{
        let check = window.confirm("Are You Sure You Want Add This Movie To Favorites?");
        if(check){
            document.getElementById("Moveis-Btn").innerHTML = "Added";
            document.getElementById("Moveis-Btn").disabled = true;
            let getlocalStrong = localStorage.getItem("Movies");
            if (getlocalStrong == null) {
                listArr = [];
            } else {
                listArr = JSON.parse(getlocalStrong)
            }
            listArr.push(obj);
            localStorage.setItem("Movies", JSON.stringify(listArr));
        }
    }
    let img = `https://image.tmdb.org/t/p/w1280`;
    return (
        <div className="MainViewMoive">
           <div className="container">
               <h3 className='title-page'>Movies Details</h3>
               <div className="ShowMoive">
                  <div className="row">
                   <div className="col-lg-6 col-md-12">
                       <img className='inverted'src={img + movie.poster_path} alt="NOT FOUND"/>
                    </div>
                    <div className="col-lg-6 col-md-12 infoMovie">
                        <h3>{movie.original_title}</h3>
                        <p>{movie.overview}</p>
                        <p>Runtime : {movie.runtime} Min</p>
                        <p>Revenue : ${movie.revenue}</p>
                        <img  className='inverted' src={img + movie.backdrop_path}/>

                            <div className='btnOption'>
                                <button onClick={()=>{history.goBack()}}> Back To Home </button>
                                <button onClick={()=>{history.push('/Favorites')}}> Go To Favorite </button>
                                <button id='Moveis-Btn' onClick={()=>{addToFavorite(movie)}}> Add To Favorite </button>
                                
                            </div>

                        </div>   
                       
                      
                  </div>

               </div>
           </div>
        </div>
    )
}
export default ViewDetails
