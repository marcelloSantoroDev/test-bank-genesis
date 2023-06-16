import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BookDetails() {
  const { bookList } = useContext(AppContext)
  const { id } = useParams();

  const splitTitle = id.split("-")
  const originalTitle = splitTitle.map(word => word.slice(0)).join(" ");
  const bookToRender = bookList.find((book) => book.title.toLowerCase() === originalTitle);
  const { title, author, description } = bookToRender

  return (
    <>
    <span className='details-title'>{`${title}'s details:`}</span>
    <section className='book-card'>
        <h2>Title:</h2>
        <p>{title}</p>
        <h2>Author:</h2>
        <p>{author}</p>
        <h2>Description:</h2>
        <p>{description}</p>
    </section>
    <br />
    <br />
    <Link className="return-link" to="/" >Home</Link>
    </>
  )
}

export default BookDetails
