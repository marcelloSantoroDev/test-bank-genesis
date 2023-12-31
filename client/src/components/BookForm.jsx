import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext';
import './css/BookForm.css'

function BookForm() {
  const { bookList, setBookList } = useContext(AppContext);

  const [book, setBook] = useState({
    title: '',
    author: '',
    description: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setBook({
      ...book,
      [name]: value
    });
  }

  const handleClick = () => {
    const { title, author, description } = book;
    const newBook = { title, author, description };
    setBookList([...bookList, newBook]);
    setBook({
      title: '',
      author: '',
      description: '',
    });
  }

  return (
    <section className='form-div'>
      <p>Insert your books below:</p>

      <form className="book-form" >
      <input
      value={book.title}
      name="title"
      type="text"
      placeholder="Title"
      onChange={ handleChange }
      />

      <input
      value={book.author}
      name="author"
      type="text"
      placeholder="Author"
      onChange={handleChange}
      />

      <textarea
      value={book.description}
      name="description" 
      type="text"
      placeholder="Description"
      onChange={handleChange}
      />

      <button type="button" onClick={ handleClick }>Insert</button>
    </form>
    </section>
  )
}

export default BookForm