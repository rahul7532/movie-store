import { type } from 'os'
import React, { useEffect, useState } from 'react'
import Movie from '../Movie'
import './style.css'
import CircularProgress from '@material-ui/core/CircularProgress';
type Props={
    movies:any,
    setMovies:any,
    setTempMovies:any
    
}
type Movie={
    imdbID:string,
   
    image:string,
    year:string,
    title:string,
}
const API_KEY='4a3d4c85'
const series=['avengers','ironman','fast and furious','harry potter']
  

const Movies:React.FC<Props>= props=>{
    

useEffect(()=>{
    
    const promises=series.map(series=>{
        return  fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(series)}&apikey=${API_KEY}&page=1`)
        .then(res=>res.json())
    })
   Promise.all(promises).then((movies:any)=>{
       const updateMovies:Movie[]=movies.map((movie:any)=>
         movie.Search).flat(2).map
         ((movie:any)=>({
         title:movie.Title,
         year:movie.Year,
         image:movie.Poster,
           imdb:movie.imdbID 
         })) 
  
        props.setMovies(updateMovies)
         props.setTempMovies(updateMovies)

   })
},[])
   if(props.movies.length===0){
       return <div className="loader">
           <CircularProgress />
       </div>
   }


  return <div className="movies">
      {props.movies.flat(2).map((movie:Movie)=>{
          return <Movie 
            key={movie.imdbID}
            title={movie.title}
            year={movie.year}
           image={movie.image}
          />
      })}

  </div>
}
export default Movies;