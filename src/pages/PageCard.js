import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgress from '@material-ui/core/CircularProgress';
import Pagination from '@material-ui/lab/Pagination';
import Modal from '@material-ui/core/Modal';

import CardComponent from "../components/card/CardComponent"
import   "./PageCard.scss"


import "bootstrap/dist/css/bootstrap.min.css";

 
const MOVIES_PER_PAGE = 6;

const PageCard = (props) => {

  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(-1);

  function filtrarPorGenero(genero) {
    return movies.filter(movie => movie.genres.includes(genero))
  }

  const moviesToShow = props?.filter ? filtrarPorGenero(props.filter) : movies;
  const moviesQty = moviesToShow.length;
  const totalPages = Math.ceil(moviesQty / MOVIES_PER_PAGE);

  const currentPageMovies = moviesToShow.slice((currentPage -1) * MOVIES_PER_PAGE ,currentPage * MOVIES_PER_PAGE);
  console.log((currentPage -1) * MOVIES_PER_PAGE ,currentPage * MOVIES_PER_PAGE);
  async function MovieRequest(){
    try{
      setIsloading(true);
      const result = await axios.get("http://api.tvmaze.com/shows")

          setMovies(result.data)

    }catch(err){

    } finally {
      setIsloading(false);
    }

  }

  useEffect (() => {
      MovieRequest()

  }, [])


  function getFullDescription(index){
    if (index < 0) return '';

    return currentPageMovies[index].summary;
  }

if (isloading){
  return(
    <div>
      < CircularProgress color="inherit" />
    </div>
  )
}
  return (
    <>
      <Pagination className="pagination"   count={totalPages} page={currentPage} onChange={(event, num) => setCurrentPage(num)} />
      <div className ="CardComponent"> 
      {
        moviesToShow.length  > 0 
        ? currentPageMovies.map ( (movie, index) => <CardComponent onClick={() => setShowFullDescription(index)} movie={movie}/>)
        : "no existe "
      }
      </div>
      <Pagination className="pagination" count={totalPages} page={currentPage} onChange={(event, num) => setCurrentPage(num)} />
      <Modal
        className="full-description-container"
        open={showFullDescription > -1}
        onClose={() => setShowFullDescription(-1)}
      >
        <div className="full-description">{currentPageMovies?.[showFullDescription]?.summary}</div>
      </Modal>
    </>
  )
}

export default PageCard;
