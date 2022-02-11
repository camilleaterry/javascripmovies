import React, { useContext, useState } from 'react'
import { MovieContext } from "./MovieList"
import { useHistory, useParams } from 'react-router-dom'
import { UsageState } from 'webpack';

export default function MovieForm(){
    let {movies, setMovie} = useContext(MovieContext)
    let {mid} = useParams() 

    let movie = mid ? movies.find(m => m.id == mid) : {}
    let [title, setTitle] = useState(movie.title)
    let [poster, setPoster] = useState(movie.poster)
    let [plot, setPlot] = useState(movie.plot)

    const history = useHistory()
    const submit = e => {
        e.preventDefault();
    }
    return (
       // <p>{movies.length}</p>
        <form onSubmit={submit}>
            <h1>Adding/Editing a Movie</h1>
            <div className="field">
            <label htmlFor="title">Title</label>
            <div className="control">
                <input type="text" name="title" value={title} onChange={e => setTitle(e.target.value)}/>
                <p className="help">Title is required.</p>
            </div>
            </div>

            <div className="field">
            <label htmlFor="poster">Poster</label>
            <div className="control">
                <input type="url" name="poster" value={poster} onChange={e => setPoster(e.target.value)}/>
                <p className="help">Poster is required.</p>
            </div>
            </div>

            <div className="field">
                <label htmlFor="plot">Plot</label>
                <div className="control">
                    <textarea name="plot" value={plot} onChange={e => setPlot(e.target.value)}></textarea>
                    <p className="help">Plot is required.</p>
                </div>
            </div>

            <div className="field">
            <label></label>
            <div className="control">
                <button className="primary">Submit</button>
                <button className="primary" onClick={()=>history.push('/movies')}>Cancel</button>
            </div>
            </div>
            
        </form>
    )
}