import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { bookList } = useContext(AppContext)
  const { id } = useParams();

  const splitTitle = id.split("-")
  const originalTitle = splitTitle.map(word => word.slice(0)).join(" ");
  const bookToRender = bookList.find((book) => book.title.toLowerCase() === originalTitle);
  const { title, author, description } = bookToRender

  return (
    <>
    <span>{`${title}'s details`}</span>
    <section className='book-card'>
      <h2>{title}</h2>
      <h4>{author}</h4>
      <p>{description}</p>
    </section>
    </>
  )
}

export default BookDetails
