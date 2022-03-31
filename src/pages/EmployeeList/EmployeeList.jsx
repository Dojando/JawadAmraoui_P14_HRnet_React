import './employeeList.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CreateEmployee() {



  return (
    <div className='container_employee_list'>
      <header className='header_employee_list'>
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>
      </header>

    </div>
  );
}

export default CreateEmployee;