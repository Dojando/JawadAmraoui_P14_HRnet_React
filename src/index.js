import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import { Route } from "react-router";
import './style.css';
import CreateEmployee from './pages/CreateEmployee';
import EmployeeList from './pages/EmployeeList';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/create-employee" element={<CreateEmployee/>} />
          <Route path="/employee-list" element={<EmployeeList/>} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);