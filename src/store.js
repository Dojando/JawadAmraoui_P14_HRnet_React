import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk'; 

// state
const initialState = {
  showModal: false,
  errorMessage: false,
  firstNameValue: "",
  lastNameValue: "",
  dateBirthValue: "",
  startDateValue: "",
  streetValue: "",
  cityValue: "",
  stateValue: "",
  zipCodeValue: "",
  departmentValue: "",
  employeeList: [],
};

// actions creators

export const handleFirstNameChange = (e) => ({
  type: "handleFirstNameChange",
  payload: { event: e },
});

export const handleLastNameChange = (e) => ({
  type: "handleLastNameChange",
  payload: { event: e },
});

export const handleDateBirthChange = (e) => ({
  type: "handleDateBirthChange",
  payload: { event: e },
});

export const handleStartDateChange = (e) => ({
  type: "handleStartDateChange",
  payload: { event: e },
});

export const handleStreetChange = (e) => ({
  type: "handleStreetChange",
  payload: { event: e },
});

export const handleCityChange = (e) => ({
  type: "handleCityChange",
  payload: { event: e },
});

export const handleZipCodeChange = (e) => ({
  type: "handleZipCodeChange",
  payload: { event: e },
});

export const getStateValue = (e) => ({
  type: "getStateValue",
  payload: { event: e },
});

export const getDepartmentValue = (e) => ({
  type: "getDepartmentValue",
  payload: { event: e },
});

export const closeModal = () => ({
  type: "closeModal",
});

export const saveEmployee = (e) => ({
  type: "saveEmployee",
  payload: { event: e },
})

// reducer

function reducer(state = initialState, action) {
  if (action.type === "handleFirstNameChange") {
    return { ...state, firstNameValue: action.payload.event.target.value }
  }
  if (action.type === "handleLastNameChange") {
    return { ...state, lastNameValue: action.payload.event.target.value }
  }
  if (action.type === "handleDateBirthChange") {
    return { ...state, dateBirthValue: action.payload.event.target.value }
  }
  if (action.type === "handleStartDateChange") {
    return { ...state, startDateValue: action.payload.event.target.value }
  }
  if (action.type === "handleStreetChange") {
    return { ...state, streetValue: action.payload.event.target.value }
  }
  if (action.type === "handleCityChange") {
    return { ...state, cityValue: action.payload.event.target.value }
  }
  if (action.type === "handleZipCodeChange") {
    return { ...state, zipCodeValue: action.payload.event.target.value }
  }
  if (action.type === "getStateValue") {
    return { ...state, stateValue: action.payload.event }
  }
  if (action.type === "getDepartmentValue") {
    return { ...state, departmentValue: action.payload.event }
  }
  if (action.type === "closeModal") {
    return { ...state, showModal: false }
  }
  if (action.type === "saveEmployee") {
    action.payload.event.preventDefault();
    if (state.cityValue === "" || state.dateBirthValue === "" || state.firstNameValue === "" || state.lastNameValue === "" || state.startDateValue === "" || state.streetValue === "" || state.zipCodeValue === "") {
      return { ...state, errorMessage: true }
    } else {
      let employeeObject = {
        firstName: state.firstNameValue,
        lastName: state.lastNameValue,
        startDate: state.startDateValue,
        department: state.departmentValue,
        dateBirth: state.dateBirthValue,
        street: state.streetValue,
        city: state.cityValue,
        state: state.stateValue,
        zipCode: state.zipCodeValue,
      }
      state.employeeList.push(employeeObject);
      return { ...state, showModal: true, errorMessage: false, firstNameValue: "", lastNameValue: "", dateBirthValue: "", startDateValue: "", streetValue: "", cityValue: "", stateValue: "", zipCodeValue: "", departmentValue: "" }
    }
  }
  return state
}

export const store = createStore(reducer, applyMiddleware(thunk));