import React from 'react';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Header } from './components/ui/Header';
import { FormOrder } from './components/orders/FormOrder';
import { GridTable } from './components/tracing/GridTable';

export const App = () => {
  return <Router>
    <Header />
    <Routes>
      <Route path="/" element={<FormOrder />} />
      <Route path="/orders" element={<FormOrder />} />
      <Route path="/order" element={<GridTable />} />
      <Route path="*" element={<FormOrder />} />
    </Routes>
  </Router>
}


