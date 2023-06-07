import { DateTime } from './modules/luxon.js';
import Books from './modules/books.js';
import UserI from './modules/form.js';
import Library from './modules/library.js';

const currentDate = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
document.getElementById('present-time').innerHTML = currentDate;

document.addEventListener('DOMContentLoaded', UserI.displayBooks);

document.querySelector('#formID').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const book = new Books(title, author);
  UserI.addBookToList(book);
  Library.addBook(book);
  UserI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  UserI.deleteBook(e.target);
  Library.removeBook(e.target.previousElementSibling.previousElementSibling.textContent);
});
const bookList = document.querySelector('.title');
const listBtn = document.querySelector('#list');
const formContainer = document.querySelector('#book-form');
const contactInfo = document.querySelector('#contact-info');

listBtn.addEventListener('click', () => {
  bookList.classList.remove('hide');
  formContainer.classList.add('hide');
  contactInfo.classList.add('hide');
});

window.addEventListener('load', () => {
  bookList.classList.remove('hide');
  formContainer.classList.add('hide');
  contactInfo.classList.add('hide');
});

const addNewBtn = document.querySelector('#new');

addNewBtn.addEventListener('click', () => {
  bookList.classList.add('hide');
  formContainer.classList.remove('hide');
  contactInfo.classList.add('hide');
});

const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', () => {
  bookList.classList.add('hide');
  formContainer.classList.add('hide');
  contactInfo.classList.remove('hide');
});
