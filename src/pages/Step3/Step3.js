import React, {useState,useEffect} from 'react';
import dishes from "../../data/dishes.json";
import Header from '../../components/Header/Header';

function Step3(props) {
  const [dataDish, setDataDish] = useState([]);
  const [dish, setDish] = useState('breakfast');
  const [numServing, setNumServing] = useState('1');
  useEffect(() => {
    dishes.dishes.forEach(dishe => {
      if(dishe.availableMeals.indexOf(props.key)>0 && dataDish.indexOf(dishe.restaurant)<0){
        dataDish.push(dishe.restaurant);
      }
    });
    setDataDish(dataDish);
    // alert(props.key);
  });
  // alert(dataDish);
  const handleSubmitForm = (event) => (
    event.preventDefault(),
    fetch('/Review', {
        method: 'POST',
        body: new FormData(event.target),
      })
  );
  const handleChangeDish = (event) => (
    setDish(event.target.value)
  );
  const handleChangeNumServing = (event) => (
    setNumServing(event.target.value)
  );
  const handleBack=()=> {
    props.history.push('/fabbi-test/Step2');
  }
  return (
    <div>
        <Header navAction={'actionStep3'}/>
        <form action="/Review" method="POST">
          <div>
              <table className="form3">
                  <td>
                      <label>Please Select a Dish</label><br/><br/>
                      <select className="select-container" name="dish" required 
                          value={dish}
                          onChange={event => handleChangeDish(event)}>
                          {dishes.dishes.map((dish) => <option key={dish.key} value={dish.key}>{dish.name}</option>)}
                      </select><br/><br/><br/>
                  </td>
                  <td>
                      <label>Please enter no. of servings</label><br/><br/>
                      <input type="number" min="1" max="10" className="ipNumber" name="numServing" required 
                        value={numServing}
                        onChange={event => handleChangeNumServing(event)}/>
                  </td>
              </table>
          </div>
          <div className="btnFooter">
              <button onClick={handleBack} className="btnPrevious" type="button">Previous</button>
              <input className="btnNext" type="submit" value="Next" />
          </div>
      </form>
    </div>
  );
}

export default Step3;