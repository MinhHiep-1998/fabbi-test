import React, {useState} from 'react';
import Header from '../../components/Header/Header';

function Step1() {
  const [dataMeal, setDataMeal] = useState([
    { key: "breakfast", name: "Breakfast" },
    { key: "lunch", name: "Lunch" },
    { key: "dinner", name: "Dinner" },
  ]);
  const [numPeople, setNumPeople] = useState('1');
  const [meal, setMeal] = useState('breakfast');
  const handleSubmitForm = (event) => (
    // alert("Full Name: " + new FormData(event.target).get('meal')),
    event.preventDefault(),
    fetch('/Step2', {
        method: 'POST',
        body: new FormData(event.target),
      })
  );
  const handleChangeNumPeople = (event) => (
    setNumPeople(event.target.value)
  );
  const handleChangeMeal = (event) => (
    setMeal(event.target.value)
  );
  return (
    <div>
        <Header navAction={'actionStep1'}/>
        <form action="/Step2" method="POST">
        <div className="form1">
            <label>Please Select a meal</label><br/><br/>
            <select className="select-container" name="meal" required 
                value={meal}
                onChange={event => handleChangeMeal(event)}>
                {dataMeal.map((meal) => <option key={meal.key} value={meal.key}>{meal.name}</option>)}
            </select>
            <br/><br/><br/>
            <label>Please Enter Number of people</label><br/><br/>
            <input type="number" min="1" max="10" className="ipNumber" name="numPeople" required 
            value={numPeople}
            onChange={event => handleChangeNumPeople(event)}/>
        </div>
        <div className="btnFooter">
            <input className="btnNext" type="submit" value="Next" />
        </div>
        </form>
    </div>
  );
}
export default Step1;