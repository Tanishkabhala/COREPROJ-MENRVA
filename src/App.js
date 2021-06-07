import React, { Fragment } from "react";

import CardOne from "./Components/First";
import IDCard from "./Components/IDCard";
import "./index.css";

function App() {
  return (
    <Fragment>
      <div className='content__wrapper d-grid'>
        <CardOne />
        <IDCard />
      </div>
    </Fragment>
  );
}

export default App;
