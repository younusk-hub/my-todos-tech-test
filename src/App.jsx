import { useState } from 'react';
import './App.scss';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

function App() {
  const [cardArr, setCardArr] = useState(["adopt a duck", "buy camera"])
  
  return (
    <div className="App">
      <Nav/>
      <Cards cardArr = {cardArr}/>
    </div>
  );
}

export default App;
