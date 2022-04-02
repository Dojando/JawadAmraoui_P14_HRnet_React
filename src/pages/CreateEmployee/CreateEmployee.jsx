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
  const [showModal, setShowModal] = useState(true);

  function childValue(childData) {
    console.log(childData)
    setDropdownValue(childData);
  }

  function saveEmployee(e) {
    e.preventDefault();
    setShowModal(true);
  }

  function closeModal(e) {
    setShowModal(false);
  }

  const stateArray = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]

  const departmentArray = ["Sales","Marketing","Engineering", "Human Resources", "Legal"]

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
            <Dropdown data={stateArray} getValue={childValue} name={"state"} labelId={"state"}/>

          </div>

          <div className="input-wrapper">
            <label htmlFor="zipcode">Zip Code</label><input type="number" id="zipcode" />
          </div>
        </fieldset>
        <div className="input-wrapper">
          <label htmlFor="department">Department</label>
          <Dropdown data={departmentArray} getValue={childValue} name={"department"} labelId={"department"}/>
        </div>
        <div className='save-button-container'>
          <button onClick={saveEmployee}>Save</button>          
        </div>
      </form>
      { showModal ? 
      <div className='save-modal' onClick={closeModal}>
        <div className='save-validation' onClick={(e) => e.stopPropagation()}>
          Employee Created !
          <div className='close-modal' onClick={closeModal}><span>❌</span></div>
        </div>
        
      </div> : null }
    </div>
  );
}

export default CreateEmployee;