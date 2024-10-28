import React from 'react'
    
function Operator() {
    let runsScored=0;
  return (
    <div>
        <div>
      <button type='button' className='animated-button' onClick={()=>{
        let a =(10+20)*5-10/2%2;
        console.log(a);
      }}> Operator</button>
      </div>
      <div>
        <button type='button' className='animated-button' onClick={()=>{
            runsScored++
            console.log(runsScored)
        }}>Increment</button>

      </div>
      <div>
        <button type='button' className='animated-button' onClick={()=>{
            runsScored--
            console.log(runsScored)
        }}>Decrement</button>
      </div>
      <div>
        <button type='button' className='animated-button' onClick={()=>{
            let a = 10;
            a +=20;
             a -=5;
            a *=10;
            a /=2;
             a %=10;
            console.log(a);
        }} >Assignment Operator</button>
      </div>
      <div>
        <button type='button' className='animated-button' onClick={()=>{
            let score=50;
            console.log(score==50);
            console.log(score!=40);
            console.log(score>40);
            console.log(score<40);
            console.log(score>=57);
            console.log(score<=60);
            console.log(score===49);

        }}>Comparision Operator</button>
      </div>
    </div>
  )
}

export default Operator
