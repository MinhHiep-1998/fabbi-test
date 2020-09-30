import React, {useState,useEffect} from 'react';
import dishes from "../../data/dishes.json";
import Header from '../../components/Header/Header';

function Step2(props) {
  // const dataRestaurant = [];
  const [dataRestaurant, setDataRestaurant] = useState([]);
  const [dishe, setDishe] = useState('');
  useEffect(() => {
    dishes.dishes.forEach(dishe => {
      if(dishe.availableMeals.indexOf(props.key)>0 && dataRestaurant.indexOf(dishe.restaurant)<0){
        dataRestaurant.push(dishe.restaurant);
      }
    });
    setDataRestaurant(dataRestaurant);
    // alert(props.key);
  });
  // alert(dataRestaurant);
  const handleSubmitForm = (event) => (
    event.preventDefault(),
    fetch('/Step3', {
        method: 'POST',
        body: new FormData(event.target),
      })
  );
  const handleChangeDishe = (event) => (
    setDishe(event.target.value)
  );
  const handleBack=()=> {
    props.history.push('/fabbi-test/Step1');
  }
    return (
      <div>
        <Header navAction={'actionStep2'}/>
        <form action="/Step3" method="POST">
          <div className="form2">
            <label>Please Select a Restaurant</label><br/><br/>
            <select className="select-container" name="dishe" required
              value={dishe}
              onChange={event => handleChangeDishe(event)}>
              {dishes.dishes.map((dishes) => <option key={dishes.id} value={dishes.id}>{dishes.restaurant}</option>)}
            </select><br/><br/><br/>
          </div>
          <div className="btnFooter">
              <button onClick={handleBack} className="btnPrevious" type="button">Previous</button>
              <input className="btnNext" type="submit" value="Next" />
          </div>
        </form>
      </div>
    );
  }

export default Step2;