import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox';
import colors from './components/colors';
import quotes from './components/json/quotes.json'
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)
  const rQuote = arr => Math.floor(Math.random() * arr.length);
  const firstPhrase = quotes[rQuote(quotes)]
  const [RandomQuote, setRandomQuote] = useState(firstPhrase)
  

  const randomColors = arr => Math.floor(Math.random() * arr.length);
  const firstColor = colors[randomColors(colors)]
  const [RandomColors, setRamdomColors] = useState(firstColor)
  
  
  
  const getRandom= () =>{
      setRandomQuote(quotes[rQuote(quotes)])
      setRamdomColors(colors[randomColors(colors)])
  }

  return (
    <div style={{backgroundColor: RandomColors.bgColor }} className="App">
      <QuoteBox RandomQuote={RandomQuote} RandomColors={RandomColors} />

        <div className="button1">
        <Button RandomColors={RandomColors} getRandom={getRandom}/>
        </div>
        
    </div>
  )
}

export default App