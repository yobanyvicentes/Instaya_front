import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from './components/ui/Header';
import { FormOrder } from './components/orders/FormOrder';

export const App = () => {
  return <Router>
    <Header />
    <FormOrder/>
  </Router>
}


