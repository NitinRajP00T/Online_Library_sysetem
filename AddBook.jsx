

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addItem } from '../redux/booksSlice';
import './AddBook.css';

function AddBookPage() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [pages, setPages] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const imageUrl = image || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjflpPFAmZCq2o0MiGOscByy2JLLs7vu_IIoOeQOCXqrRAdUwZU9EdOXQW8ArgseT4ySs&usqp=CAU';
    const isValidInput = title && author && category && description && rating && pages;

    if (isValidInput) {
      const newItem = { id: Date.now(), title, author, category, description, rating, pages, image: imageUrl };
      dispatch(addItem(newItem));
      navigate('/browse');
    } else {
      alert('All fields are required!');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="formchild" required />
      <br /><br />
      <input value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Author" className="formchild" required />
      <br /><br />
      <input value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Category" className="formchild" required />
      <br /><br />
      <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" className="formchilddescription" required />
      <br /><br />
      <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" className="formchild" required />
      <br /><br />
      <input type="number" value={pages} onChange={(e) => setPages(e.target.value)} placeholder="Pages" className="formchild" required />
      <br /><br />
      <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" className="formchild" />
      <br /><br />
      <button type="submit" className="addbook">Add Book</button>
    </form>
  );
}

export default AddBookPage;
