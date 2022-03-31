import './createEmployee.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Dropdown from "../../components/dropdown/Dropdown"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CreateEmployee() {
  // const dispatch = useDispatch();

  // const editName = useSelector((state) => state.editName);

  const [dropdownValue, setDropdownValue] = useState(null);

  function childValue(childData) {
    console.log(childData)
    setDropdownValue(childData);
  }

  let dropArray = ["test1","test2","test3"]

  return (
    <div className='container_create_employee'>
      <header className='header_create_employee'>
        <h1>HRnet</h1>
        <Link to="/employee-list">View Current Employees</Link>
      </header>
      <h2>Create Employee</h2>
      <form>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label><input type="text" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">First Name</label><input type="text" id="lastname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="dateofbirth">Date of Birth</label><input type="date" id="dateofbirth" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="startdate">Start Date</label><input type="date" id="startdate" />
        </div>
        <fieldset>
          <legend>Address</legend>
          <div className="input-wrapper">
            <label htmlFor="street">Street</label><input type="text" id="street" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label><input type="text" id="city" />
          </div>
          <div className="input-wrapper">

            <label htmlFor="state">State</label>
            <Dropdown data={dropArray} getValue={childValue} name={"state"} labelId={"state"}/>

          </div>

          <div className="input-wrapper">
            <label htmlFor="zipcode">Zip Code</label><input type="number" id="zipcode" />
          </div>
        </fieldset>
        <div className="input-wrapper">
          <label htmlFor="departement">Departement</label>
          <Dropdown data={dropArray} getValue={childValue} name={"departement"} labelId={"departement"}/>
        </div>
        <div className='save-button-container'>
          <button>Save</button>          
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;