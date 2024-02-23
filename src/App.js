import { useState } from 'react'
import Box from './Box'
import Form from './Form'
function App() {
  const [color, setColor] = useState('Empty Value')
  // const [color, setColor] = useState('Empty')
  return (
    <div className="App">
      < Box
        color={color}
      />
      <Form
        color={color}
        setColor={setColor}
      />
    </div>
  );
}



export default App;
