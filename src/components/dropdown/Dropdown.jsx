import './dropdown.css';
import { useEffect } from 'react'


function Dropdown(props) {

  useEffect(() => {
    props.getValue(props.data[0])
  }, []);

  const sendDropdownValue = (e) => {
    props.getValue(e.target.value)
  }

  return (
    <select onChange={sendDropdownValue} className='select-style' name={props.name} id={props.labelId}>
      { props.data.sort((a, b) => a.localeCompare(b)).map((el) =>
        <option key={el} value={el}>{el}</option>
      ) }
    </select>
  );
}

export default Dropdown;