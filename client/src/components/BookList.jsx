import React, { useContext } from 'react'
import BookForm from './BookForm'
import AppContext from '../context/AppContext';
import BookCard from './BookCard';

function BookList() {
  const { bookList } = useContext(AppContext);

  return (
    <section>
      <BookForm />
    <div>
    { bookList.map((book) => (
      <BookCard book={book} />
    )) }
    </div>
    </section>
  )
}

export default BookList