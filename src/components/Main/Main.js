import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Step1 from "../../pages/Step1/Step1";
import Step2 from "../../pages/Step2/Step2";
import Step3 from "../../pages/Step3/Step3";
import Review from "../../pages/Review/Review";

import './Main.css';

function Main() {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/fabbi-test/Step1" component={Step1} />
          <Route exact path="/fabbi-test/Step2" component={Step2} />
          <Route exact path="/fabbi-test/Step3" component={Step3} />
          <Route exact path="/fabbi-test/Review" component={Review} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Main;
