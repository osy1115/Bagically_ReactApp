import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({year,title,summary,poster,genres}){
        //alt와 title를 사용하는 이유, 이미지 위에 마우스를 올릴때 영화 이름이 뜨게하려고
        //map function에는 기본적으로 index값이 있어서 별도로 값을 정해주고 키값을 넣어줘야함
    return <div className="movie">
        <img src={poster} alt={title} title={title}/>
        <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
            {genres.map((genre,index) =>(
            <li key={index}className="genres__genre">{genre}
            </li>
            ))}
        <p className="movie__summary">{summary.slice(0,180)}...</p>
        </ul>
        </div>
        </div>
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres:PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;