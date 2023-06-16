import React from 'react'

function BookForm() {
  return (
    <section className="book-form" >
      <p>Insert your books below:</p>
    <form>
      <input type="text" placeholder="Title" />
      <input type="text" placeholder="Author" />
      <input type="text" placeholder="Description" />
      <input type="text" placeholder="Image (Optional)" />
      <button>Insert</button>
    </form>
    </section>
  )
}

export default BookForm