import './createEmployee.css';
import { Link } from "react-router-dom";
import Dropdown from "../../components/dropdown/Dropdown"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal, saveEmployee, getStateValue, getDepartmentValue, handleFirstNameChange, handleLastNameChange, handleDateBirthChange, handleStartDateChange, handleStreetChange, handleCityChange, handleZipCodeChange } from "../../store";

function CreateEmployee() {
  const dispatch = useDispatch();

  const firstNameValue = useSelector((state) => state.firstNameValue);
  const lastNameValue = useSelector((state) => state.lastNameValue);
  const dateBirthValue = useSelector((state) => state.dateBirthValue);
  const startDateValue = useSelector((state) => state.startDateValue);
  const streetValue = useSelector((state) => state.streetValue);
  const cityValue = useSelector((state) => state.cityValue);
  const zipCodeValue = useSelector((state) => state.zipCodeValue);
  const showModal = useSelector((state) => state.showModal);
  const errorMessage = useSelector((state) => state.errorMessage);

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
          <label htmlFor="firstname">First Name</label><input value={firstNameValue} onChange={(e) => {dispatch(handleFirstNameChange(e))}} type="text" id="firstname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label><input value={lastNameValue} onChange={(e) => {dispatch(handleLastNameChange(e))}} type="text" id="lastname" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="dateofbirth">Date of Birth</label><input value={dateBirthValue} onChange={(e) => {dispatch(handleDateBirthChange(e))}} type="date" id="dateofbirth" />
        </div>
        <div className="input-wrapper">
          <label htmlFor="startdate">Start Date</label><input value={startDateValue} onChange={(e) => {dispatch(handleStartDateChange(e))}} type="date" id="startdate" />
        </div>
        <fieldset>
          <legend>Address</legend>
          <div className="input-wrapper">
            <label htmlFor="street">Street</label><input value={streetValue} onChange={(e) => {dispatch(handleStreetChange(e))}} type="text" id="street" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="city">City</label><input value={cityValue} onChange={(e) => {dispatch(handleCityChange(e))}} type="text" id="city" />
          </div>
          <div className="input-wrapper">

            <label htmlFor="state">State</label>
            <Dropdown data={stateArray} getValue={(e) => dispatch(getStateValue(e))} name={"state"} labelId={"state"}/>

          </div>

          <div className="input-wrapper">
            <label htmlFor="zipcode">Zip Code</label><input value={zipCodeValue} onChange={(e) => {dispatch(handleZipCodeChange(e))}} type="number" id="zipcode" />
          </div>
        </fieldset>
        <div className="input-wrapper">
          <label htmlFor="department">Department</label>
          <Dropdown data={departmentArray} getValue={(e) => dispatch(getDepartmentValue(e))} name={"department"} labelId={"department"}/>
        </div>
        <div className='save-button-container'>
          <button type='submit' onClick={(e) => dispatch(saveEmployee(e))}>Save</button>  
          { errorMessage ? <span className='error-message'>Veuillez remplir les champs vides</span> : null }        
        </div>
      </form>
      { showModal ? 
      <div className='save-modal' onClick={() => dispatch(closeModal())}>
        <div className='save-validation' onClick={(e) => e.stopPropagation()}>
          Employee Created !
          <div className='close-modal' onClick={() => dispatch(closeModal())}><span>❌</span></div>
        </div>
      </div> : null }
    </div>
  );
}

export default CreateEmployee;