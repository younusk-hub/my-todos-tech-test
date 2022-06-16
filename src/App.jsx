import { useState } from 'react';
import './App.scss';
import AddCard from './components/AddCard/AddCard';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';

function App() {
  const [cardArr, setCardArr] = useState(["adopt a duck", "buy camera"])
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
    console.log(event.target.parentElement);
    if (event.target.checked) {
      event.target.parentElement.className += " card-container__card--cross"
    } else {
      event.target.parentElement.className = " card-container__card"
    }
  }

  const handleDelete = event => {
    event.preventDefault();
    console.log(event.target.innerText);
    const stateCopy = cardArr.map(string => ([...string].join("")))
    stateCopy.pop(event.target.innerText)
    setCardArr(stateCopy)
  }

  const handleReset = event => {
    event.preventDefault();
    setCardArr([])
  }

  return (
    <div className="App">
      <Nav handleReset={handleReset}/>
      <AddCard handleSubmit={handleSubmit}/>
      <Cards cardArr = {cardArr} handleChange={handleChange} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
