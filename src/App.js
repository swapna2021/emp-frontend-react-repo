
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {Routes,Route} from 'react-router-dom'
import EmploeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
// import UpdateEmp from './components/UpdateEmp';
import EmployeeInfo from './components/EmployeeInfo';
import '/Users/swapnam/Desktop/ReactProj-SPEC/employee-management-app/src/Styles/UpdateEmp.css'
import '/Users/swapnam/Desktop/ReactProj-SPEC/employee-management-app/src/Styles/EmployeeList.css'
function App() {
  return (
    <div className="Container">
      <div className='row bg-primary'>
        <Header />
      </div>

      <div className='row'>
        <Routes>
          <Route path="/" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/home" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/logout" element={<Home isLoggedIn={false}/>}></Route>
          <Route path="/employeelist" element={<EmploeeList/>}></Route>
          <Route path="/addEmp" element={<AddEmployee/>}></Route>
          <Route path='/updateEmp/:id' element={<AddEmployee/>}></Route>
          <Route path='/employeeInfo/:id' element={<EmployeeInfo/>}></Route>

        </Routes>
        {/* <Home isLoggedIn={false}/> */}
        {/* <Login /> */}
        {/* <Signup /> */}
      </div>
      
    </div>
  );
}

export default App;
