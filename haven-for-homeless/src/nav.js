import React from "react"
import Home_Icon from './assets/img/Icon.png';

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
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="index.html">Home</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="availableServices.html">Available Services</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="createNew.html">New Service</a></li>
                        <li class="nav-item" role="presentation"><a class="nav-link active" href="detail.html">Details</a></li>
                    </ul>
                    <span class="ml-auto"> <a href="#" class="login">Log In</a></span><a class="btn btn-light action-button" role="button" href="#">Sign Up</a>
                </div>
            </div>
        </nav>	

    );

        
    
}

export default Nav;

