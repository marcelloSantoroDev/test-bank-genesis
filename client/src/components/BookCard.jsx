import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import './css/BookCard.css'
import { useHistory } from 'react-router-dom';


function BookCard(props) {
    const { bookList, setBookList } = useContext(AppContext)
    const { title, author } = props.book
    const history = useHistory()

    const handleDeleteBook = ({ target }) => {
        const { id } = target;
        const newList = bookList.filter((book) => book.title !== id);
        setBookList(newList)
    }

    const handlePush = () => {
        const manipulatedTitle = title.toLowerCase().replace(/ /g, "-")
        history.push(`/details/${manipulatedTitle}`)
    }

      return (
    <section className='book-card'>
        <h2>{ title }</h2>
        <h4>{ author }</h4>
            <button id={title} onClick={ handleDeleteBook }>X</button>
            <button id={title} onClick={ handlePush }>Details</button>
    </section>
  )
}

export default BookCard