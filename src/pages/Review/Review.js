import React from "react";

function Review() {
  return (
    <div>
      <div>
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
      </div>
      <div className="btnFooter">
          <button className="btnPrevious" type="button">Previous</button>
        <button className="btnNext" type="button">Submit</button>
      </div>
    </div>
  );
}

export default Review;