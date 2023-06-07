import Library from './library.js';

class UserI {
  static displayBooks() {
    const books = Library.getBooks();

    books.forEach((book) => UserI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');

    const bookDisplay = document.createElement('div');
    bookDisplay.className = 'bookList1';
    bookDisplay.innerHTML = `
        <p class="bookTitle"><b>${book.title}</b></p>
        <p>by<span></span><b>${book.author}.</b></p>
        <button class="delete">Remove</button>
        `;

    list.appendChild(bookDisplay);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
  }
}

export default UserI;
