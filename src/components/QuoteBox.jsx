import React from 'react'
import Button from './Button';

export const QuoteBox = ({RandomQuote,RandomColors}) => {
    console.log(RandomColors.borderColor);
  return (
    <div className='caja1 ' style={{borderColor:RandomColors.borderColor, color: RandomColors.letterColor}}>
        <h1>""{RandomQuote.quote}""</h1>
        <h3>--{RandomQuote.author}</h3>
        
    </div>
  )
}
 export default QuoteBox