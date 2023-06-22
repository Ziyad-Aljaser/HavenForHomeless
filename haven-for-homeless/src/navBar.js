import React from "react"
import Home_Icon from './assets/img/Icon.png';
import { Link } from 'react-router-dom';

function Nav(){

    return(

        <nav class="navbar navbar-dark navbar-expand-md">
            <div class="container">
                <div><img src={Home_Icon}/></div>
                <div class="navbar-brand">HavenForHomeless</div>
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navcol-1">
                    <ul class="nav navbar-nav">
                        <li class="nav-item" role="presentation"><Link class="nav-link active" to="/">Home</Link></li>
                        <li class="nav-item" role="presentation"><Link class="nav-link active" to="/availableServices">Available Services</Link>
                        </li>

                        <li class="nav-item" role="presentation"><Link class="nav-link active" to="/newService">New Service</Link></li>
                        <li class="nav-item" role="presentation"><Link class="nav-link active" to="/detail">Details</Link></li>
                    </ul>
                    <span class="ml-auto"><Link class="login" to="/login">Login</Link></span><a class="btn btn-light action-button" role="button" href="#">Sign Up</a>
                </div>
            </div>
        </nav>	

    );

        
    
}

export default Nav;

