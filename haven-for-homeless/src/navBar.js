import React, { useContext } from 'react';
import { AuthContext } from './App';

import Home_Icon from './assets/img/Icon.png';
import { Link } from 'react-router-dom';


function Nav(){
    const { isLoggedIn, user  } = useContext(AuthContext);
    
    return(

        <nav class="navbar navbar-dark navbar-expand-md">
            <div class="container">
                <div><img src={Home_Icon}/></div>
                <div class="navbar-brand">HavenForHomeless</div>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    {isLoggedIn ? (
                        <>
                            <ul class="nav navbar-nav">
                                <li class="nav-item" role="presentation"><Link class="nav-link active" to="/">Home</Link></li>
                                <li class="nav-item" role="presentation"><Link class="nav-link active" to="/availableServices">Available Services</Link></li>
                                <li class="nav-item" role="presentation"><Link class="nav-link active" to="/newService">New Service</Link></li>
                                <li class="nav-item" role="presentation"><Link class="nav-link active" to="/detail">Details</Link></li>
                            </ul>
                            <span className="ml-auto"><Link class="user" >Welcome, {user.email} </Link></span> 
                            {/* {user.username} > {user.email} */}
                            <Link className="btn btn-light action-button" to="/signout">Sign Out</Link>
                        </>
                    ) : (
                        <>
                            <span class="ml-auto"><Link class="login" to="/login">Login</Link></span>
                            <Link class="btn btn-light action-button" to="/signUp">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>	

    );
}

export default Nav;
