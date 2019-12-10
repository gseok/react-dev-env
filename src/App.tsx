import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routers from './routes/Routes';

const App = () => (
  <BrowserRouter>
    <Routers></Routers>
  </BrowserRouter>
);

export default App;
