
import './App.css'
import Listing from './Components/Listing/Listing';
import items from './etsy.json'

function App() {
  console.log(items);
  
  return (
    <Listing items={items}/>
  )
}

export default App
