// parent componet of this app

import React from 'react'
import MovieList  from './MovieList'
import { BrowserRouter as Router } from 'react-router-dom'
// routing is now available  to all other classes 
export default function Main(){
      return (
        <Router>
        <div className="container">
            <header>
            <h1>Top 10 Movies: Camille Terry</h1>
            </header>
            <MovieList/>
        </div>
        <footer> &Copy; All rights reserved</footer>
        </Router>
      )

  }