import { useState } from 'react';
import './App.scss';
import AddCard from './components/AddCard/AddCard';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

function App() {
  const [cardArr, setCardArr] = useState([])
  console.log(cardArr);

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.name.value);

    const stateCopy = cardArr.map(string => ([...string].join("")))
    stateCopy.push(event.target.name.value)
    setCardArr(stateCopy)
  }

  const handleChange = event => {
    console.log(event.target.checked);
    console.log(event.target);
    if (event.target.checked) {
      
    }
  }

  const handleDelete = event => {
    event.preventDefault();
    console.log(event.target);
  }

  return (
    <div className="App">
      <Nav/>
      <AddCard handleSubmit={handleSubmit}/>
      <Cards cardArr = {cardArr} handleChange={handleChange} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
