import React from 'react';
import ReactDOM from 'react-dom';
import { Routes, HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";
import { Route } from "react-router";
import './style.css';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';
import EmployeeList from './pages/EmployeeList/EmployeeList.jsx';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <HashRouter>
        <Routes>
          <Route path="/" element={<CreateEmployee/>} />
          <Route path="/employee-list" element={<EmployeeList/>} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);