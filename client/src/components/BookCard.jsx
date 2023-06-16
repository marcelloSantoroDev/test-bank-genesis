import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import './css/BookCard.css'
import { useHistory } from 'react-router-dom';


function BookCard(props) {
    const { bookList, setBookList } = useContext(AppContext);
    const { title, author } = props.book;
    const history = useHistory();

    const handleDeleteBook = ({ target }) => {
        const { id } = target;
        const newList = bookList.filter((book) => book.title !== id);
        setBookList(newList);
    }

    const handlePush = () => {
        const manipulatedTitle = title.toLowerCase().replace(/ /g, "-"); // criando o endpoint para /:id
        history.push(`/details/${manipulatedTitle}`);
    }

      return (
    <section className="book-card">
        <h2>Title:</h2>
        <p>{title}</p>
        <h2>Author:</h2>
        <p>{ author }</p>
            <button id={title} onClick={ handlePush }>Details</button>
            <button id={title} onClick={ handleDeleteBook }>Delete</button>
    </section>
  )
}

export default BookCard