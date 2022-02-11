import React from 'react'
import { FaThumbsUp } from 'react-icons/fa'
import StarRating from './Star'
import { useHistory } from 'react-router-dom'


export default function Movie(props){
    const history = useHistory()
    const onLike = props.onLike
    const m = props.movie
    //const conRating = math.floor(m.rating / 2)
    

    return (
      <div className="card"> 
        <img src={m.poster} alt={m.title}/>
        <h2>{m.title}</h2>
        <p>{m.plot}</p>
  
        <ul className="extra">
          <li><strong>{m.rating}</strong> <StarRating movie={m} /> </li>
          <li><strong>{m.votes}</strong> votes</li>
          <li>
            <FaThumbsUp color="maroon" onClick={onLike}/> <small>{m.likes ? m.likes : 0 }</small>
          </li>
        </ul>
        <button className="primary" onClick={() => history.push(`/movies/${m.id}/edit`)}>Edit</button>
      </div>
    )
  }