import { useState } from 'react'
import './App.css'
import image from './images/ChefLogo.png'

function App() {
  return (
    <>
  <div>
    <TopBar/>
    <Main/>
  </div>
  </>
  )
}

function TopBar(){
  return <header>
    <img  src={image}/>
    <h1>Cook Bot</h1>
  </header>
}

function Main(){
  const [ingredients, setIngredients] = useState([]);
  //

  const myIngredients = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  
  function handleSubmit(event){

    event.preventDefault(); 

    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient") 
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (<main>
    <form onSubmit={handleSubmit} className='add-ingredient-form'>
      <input
        type="text"
        placeholder=" e.g. Potato, Onion ... "
        aria-label='Add ingredient'
        name='ingredient' //name is used to get the value of the input
      />
      <button type='submit'>Add ingredient</button>
    </form>
    <ul>
      {myIngredients}
    </ul>

  </main>);
}

export default App;
