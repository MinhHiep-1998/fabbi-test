import React, {useState,useEffect} from 'react';
import Header from '../../components/Header/Header';

function Review(props) {
  const handleBack=()=> {
    props.history.push('/fabbi-test/Step3');
  }
  return (
    <div>
        <Header navAction={'actionReview'}/>
        <form action="/Review" method="POST">
          <table className="reviewDetail">
              <tr>
                  <td style={{minWidth:200}}>
                      <p>Meal</p>
                      <p>No. of People</p>
                      <p>Restaurant</p>
                      <p>Dishes</p>
                  </td>
                  <td>
                      <p>Lunch</p>
                      <p>3</p>
                      <p>Restaurant A</p>
                      <p className="box-order">Dish A - 1</p>
                  </td>
              </tr>
          </table>
        <div className="btnFooter">
          <button onClick={handleBack} className="btnPrevious" type="button">Previous</button>
          <button className="btnNext" type="button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Review;