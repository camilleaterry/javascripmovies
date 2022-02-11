import React, { useState, createContext } from 'react'
import Movie from './Movie'
import { top10 } from '../top10'
import { Switch, Route, Link, Redirect, useHistory } from 'react-router-dom'
import { About, ErrorNotFound } from './Pages'
import MovieForm from './MovieForm'

export const MovieContext = createContext()
export default function MovieList(){

      //you can do a   <React.Fragment>  </React.Fragment> or <> </>
      const [movies, setMovies] = useState(top10)
      const history = useHistory()
      useState(top10)
      return(
        <MovieContext.Provider value={{movies, setMovies}}> 
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/movies">List</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <Route path="/movies"> 
          <button className="primary" onClick={
            // soorted by lowest to heighest
            () => {
              movies.sort((a, b) => a.votes - b.votes)
              //Update teh state
              setMovies(movies.map(m => m))
            }
          }>Sort</button>
          <button className="primary" onClick={()=> history.push('/movies/new')}>Add a new movie</button>
          </Route>
        </nav>
        <main>
          <Switch>
            <Route exact path="/movies">
              {movies.map((m, i) => {
                return <Movie key={m.id} movie={m} onLike={
                  () => {
                    // if movie has a like feild. 
                    // then +! if not just give a value of 1 
                    movies[i].likes = movies[i].likes ? movies[i].likes + 1 : 1

                    setMovies(movies.map(m => m))
                  }
                }/>
              })}
            </Route>
            <Route path="/movies/new"><MovieForm/></Route>
            <Route path="/movies/:mid/edit"><MovieForm/></Route>
            <Route path="/about"><About></About></Route>
            <Redirect from="" to ="/movies"/>
            <Route path="*"><ErrorNotFound/></Route>
          </Switch>
        </main>
        </MovieContext.Provider>
      )
    }

