import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Sips from './components/Sips'
import Warning from './components/Warning'


function App() {
  
  const [ drinkData, setdrinkData ] = useState([])
  const [ drink, setDrink ] = useState('')

  useEffect(() => { //recibe una fs y vareables dentro de un array que desencadena una axion, cada vez que se actualiza el array se ejecuta la fs
    axios
    .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((resp) => {
      console.log((resp.data))
      setdrinkData(resp.data.drinks)
    } )
    .catch((error) => console.error(error))
  },[drink])
  // prevenDefault evita que se recargue la pagina para los formularios
  // cacturamos el objetivo del elvento formulario y extramos a su hijo que es el input es su primer hijo por eso el 0
  // del input extraemos la propiedad value y despues se lo pasamos al set
  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target[0].value;
    // console.log(value);
    setDrink(value);
  } 

  return (
    <div className="App">
      <div className='conteiner__seeker'>
        <form onSubmit={handleSubmit}>
          <input id='drink' name='drink' defaultValue={drink} placeholder='DRINK' type="text" />
          <button ><i class="fa-solid fa-martini-glass-citrus"></i></button>
        </form>
      </div>
      
      {
        drinkData 
        ?
        drinkData.sort((a,b)=> {
          if(a.strDrink < b.strDrink){
            return -1
          } else if (a.strDrink > b.strDrink){
            return 1
          } else {
            return 0
          }
      }).map((drink, index)=>(
          <Sips 
          key={`drink-${index}` }
          liquid = {drink} />
        ))
        :
        <Warning/>
      }
      
    </div>
  )
}

export default App
