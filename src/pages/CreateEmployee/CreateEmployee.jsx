import './createEmployee.css';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CreateEmployee() {
  // const dispatch = useDispatch();

  // const editName = useSelector((state) => state.editName);

  const [svgColor, setSvgColor] = useState("black");
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const [dropdownSelected, setDropdownSelected] = useState("testing");

  function handleMouseDown(e) {
    setSvgColor("white")
  }

  function handleMouseUp(e) {
    setSvgColor("black")
  }

  function handleToggleDropdown() {
    if (toggleDropdown === false) {
      setToggleDropdown(true);
    } else {
      setToggleDropdown(false);
    }
  }

  function handleItemClick(e) {
    console.log(e.target.innerText)
    setDropdownSelected(e.target.innerText)
    setToggleDropdown(false);
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
            <label htmlFor="zipcode">Zip Code</label><input type="number" id="zipcode" />
          </div>
        </fieldset>
        <div className='dropdown' tabIndex={0}>
          <div onClick={handleToggleDropdown} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} className={toggleDropdown ?'dropdown-header open-dropdown-header' : 'dropdown-header'}>
            <p>{dropdownSelected}</p>
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" fill={svgColor} width="10px" height="10px" viewBox="0 0 31.999 32">
              <g><path d="M31.92,5.021l-14.584,22.5c-0.089,0.138-0.241,0.223-0.406,0.229c-0.004,0-0.009,0-0.014,0c-0.16,0-0.312-0.076-0.404-0.205L0.096,5.044C-0.015,4.893-0.031,4.69,0.054,4.523C0.139,4.354,0.312,4.25,0.5,4.25h31c0.183,0,0.352,0.1,0.438,0.261C32.026,4.67,32.019,4.867,31.92,5.021z"/></g>
            </svg>            
          </div>
          <div className={toggleDropdown ? 'dropdown-body' : 'hide-dropdown-body'}>
            <span onClick={handleItemClick}>test1</span>
            <span>test</span>
            <span>test</span>
          </div>          
        </div>
      </form>
    </div>
  );
}

export default CreateEmployee;