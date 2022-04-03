import './employeeList.css';
import { Link } from "react-router-dom";
import EmployeeTable from "../../components/employeeTable/EmployeeTable"
import { useSelector } from "react-redux";

function EmployeeList() {

  const employeeList = useSelector((state) => state.employeeList);

  return (
    <div className='container_employee_list'>
      <header className='header_employee_list'>
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>
      </header>

      <div className='table-container'>
        <EmployeeTable employeeList={employeeList} />
      </div>
    </div>
  );
}

export default EmployeeList;