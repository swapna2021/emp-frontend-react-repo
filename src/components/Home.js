import React from "react";
import { useNavigate } from "react-router";

const Home=(props)=>{

    const navigate=useNavigate();

    const login=()=>{
        navigate("/login")
    }

    const signup=()=>{
        navigate("/signup")
    }
    const logout=()=>{
        navigate("/logut")
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <ul>
                        <li>Name:Swapna</li>
                        <li>Mobile:6282614948</li>
                        <li>Mail:swapna.motupally@gmail.com</li>
                    </ul>
                </div>
                <div className="col-6">

                <form className="form-group" >
                    <h6>Add your photo</h6>
                    {props.isLoggedIn?
                    <button className="btn btn-success" onClick={logout}>Logout</button>
                    :
                    <>
                    <button className="btn btn-primary" type="button" onClick={login}>Login</button>&nbsp;&nbsp;&nbsp;
                    <button className="btn btn-primary" type="button" onClick={signup}>Signup</button>
                    </>
                    }
                </form>
                </div>
            </div>   
        </div>
    )
}
export default Home