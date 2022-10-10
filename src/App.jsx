import { useState } from 'react'

function App() {
const [calc, setCalc] = useState("");
  
  
const ops = ['/', '*', '-', '+'];

    
  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
     )                            
    ) {
     return;
    }
    
    setCalc(calc + value);

  }
  
const createDigits = () => {
  const digits =[];
  
  for (let i = 9; i > 0; i--) {
    digits.push(
      <button 
        onClick={()  => updateCalc(i.toString())}
      key={i}>
        {i}
      </button>
    )
  }
   return digits;
  
}

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteAll = () => {
   setCalc('')
  }
  
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
         { calc || "0"}
          </div>
        
         <div className="keypad">
        <div className="operators">
          <button onClick={()  => updateCalc('/')}>/</button>
         <button onClick={()  => updateCalc('*')}>*</button>
          <button onClick={()  => updateCalc('+')}>+</button>
         <button onClick={()  => updateCalc('-')}>-</button>

          <button onClick={deleteAll}>CE</button>
        

          
         
          
          </div>

        <div className="digits">
          { createDigits() }
          <button onClick={calculate}>=</button>
          <button onClick={()  => updateCalc('.')}>.</button>
          <button onClick={()  => updateCalc('0')}>0</button>
         
           </div>
           
          </div>
        </div>
    </div>
  );
}

  export default App;