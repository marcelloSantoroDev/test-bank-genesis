import React, { useContext } from 'react'
import BookForm from './BookForm'
import AppContext from '../context/AppContext';
import BookCard from './BookCard';
import './css/BookList.css'

function BookList() {
  const { bookList } = useContext(AppContext);

  return (
    <section>
      <BookForm />
    <div className='book-div'>
    { bookList.map((book) => (
      <BookCard book={book} />
    )) }
    </div>
    </section>
  )
}

export default BookList