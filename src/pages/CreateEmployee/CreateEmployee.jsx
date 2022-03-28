import './createEmployee.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function CreateEmployee() {
  // const dispatch = useDispatch();

  // const editName = useSelector((state) => state.editName);

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
      </form>
    </div>
  );
}

export default CreateEmployee;