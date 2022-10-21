import React from 'react'

function Button({getRandom,RandomColors}) { 
    console.log(RandomColors);
return (
    <div className="button1"> 
    <button onClick={getRandom} style={{borderColor: RandomColors.borderColor, color: RandomColors.letterColor}} > Change </button>
</div>

)}
export default Button