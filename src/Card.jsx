import React from 'react'

function Card({ book, author }) {
  return (
    <div className='card'>
        <h3>Tu elección:</h3>
        <p>Libro: <span className='span'>{book}</span></p>
        <p>Autor: <span className='span'>{author}</span></p>
    </div>
  )
}

export default Card