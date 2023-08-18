import { useState } from 'react'
import './App.css'
import Card from './Card';

function App() {
  const [book, setBook] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const [showCard, setShowCard] = useState(false);

  function validateBook(info){
      let valid = true; 
      if (info.length < 3 || info.trim() !== info) {
        setError("Por favor chequea que la información sea correcta.");
        valid = false; 
      }
      return valid;
  }
  function validateAuthor(info){
      let valid = true; 
      if (info.length < 6) {
        setError("Por favor chequea que la información sea correcta.");
        valid = false; 
      }
      return valid;
  }

  function handleBook(e){
      setBook(e.target.value);
  }

  function handleAuthor(e){
      setAuthor(e.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const bookIsValid = validateBook(book);
      const authorIsValid = validateAuthor(author);
      
      if (bookIsValid && authorIsValid) {
        setShowCard(true);
        setError("")
      } else {
        setShowCard(false);
        resetValues()
      }
  }

  function resetValues(){
      setBook("")
      setAuthor("")
  }

  return (
      <>
          <h1 className='heading'>¿Cuál es tu libro y autor favorito?</h1>
          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="book">Ingresa tu libro favorito</label>
            <input className='input' id="book" type="text" onChange={handleBook} value={book}/>
            <label htmlFor="author">Ingresa tu autor favorito</label>
            <input className='input' id="author" type="text" onChange={handleAuthor} value={author}/>
            <button className='btn'>Registrar</button>
          </form>
          {error && <p className="error">{error}</p>}
          {showCard && <Card book={book} author={author}></Card>}
      </>
  )
}

export default App
