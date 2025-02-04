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
    <h1>Recipe Generator</h1>
  </header>
}

function Main(){
  return <main>
    <form className='add-ingredient-form'>
      <input
        type="text"
        placeholder="e.g. Pani-Puri"
        aria-label='Add ingredient'
      />
      <button>Add ingredient</button>
    </form>
  </main>
}

export default App
