import React, { useState ,useEffect} from "react";
import { Link, useNavigate } from 'react-router-dom';
import {getAllEmployees,deleteEmployee} from '../services/EmployeeService.js'

const EmployeeList = () => {
    
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([])

    const handleEmployeeInfo = (id) => {
        
        navigate(`/employeeInfo/${id}`);
    }
    const deleteEmp = (id) => {
      
        deleteEmployee(id).then((response)=> {
            alert("Employee deleted")
            getAllEmployeesInfo()
            console.log(response)    
        })
        .catch((error)=>console.log("unable to delete"+error))
       
    }
    const updateEmp = (id) => { 
        navigate(`/updateEmp/${id}`);
    }

    useEffect(() => {
        getAllEmployeesInfo();
    }, [])

    const getAllEmployeesInfo = () => {
        getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const logout = () => {
        navigate("/logout");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <Link className="navbar-brand" href="#" to="/home">Home</Link>
                 <Link className="navbar-brand" to="/addEmp" href="#"> AddEmployee </Link>    
            </nav>
            <div>
                <table border="3px" className="custom-table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Employee Name</th>
                            <th>Employee Salary</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map(employee => (
                            <tr key={employee.empId}>
                                <td>{employee.empId}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empSalary}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={()=>deleteEmp(employee.empId)}>Delete</button>
                                    <button className="btn btn-success" onClick={()=>updateEmp( employee.empId)}>Update</button>
                                    <button className="btn btn-info" onClick={()=>handleEmployeeInfo(employee.empId)}>Info</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="center">
                <button className="btn btn-primary" type="submit" onClick={logout}>Logout</button>
            </div>
        </div>
    )
}

export default EmployeeList;