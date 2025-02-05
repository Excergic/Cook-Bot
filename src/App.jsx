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
  const ingredients = ["potato", "onion", "tomato", "salt"];

  function handleSubmit(event){

    event.preventDefault();
    console.log("Form Submitted");
  }

  return <main>
    <form onSubmit={handleSubmit} className='add-ingredient-form'>
      <input
        type="text"
        placeholder=" e.g. Potato, Onion ... "
        aria-label='Add ingredient'
      />
      <button>Add ingredient</button>
    </form>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li>{ingredient}</li>
      ))}
    </ul>
  </main>
}

export default App
