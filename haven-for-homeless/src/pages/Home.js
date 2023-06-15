import React from 'react';
import './Home.css';
import Home_Image from '../assets/img/Homeland_Image.png';
import Home_Icon from '../assets/img/Icon.png';

function Home(){

    return(
        <div>   

            {/* ======= Start Main ======= */}
            <main>

                <div class="header-blue">
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
                    <div class="container hero">
                        <div class="row">
                            <div class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                                <h1>Welcome to HavenForHomeless</h1>
                                <p>We're dedicated to connecting those in need with local shelters and services. Explore, find help, or contribute to your community today.</p>
                                <a href="detail.html">
                                    <button class="btn btn-light btn-lg action-button" type="button">Learn More</button>
                                </a>
                            </div>
                            <div class="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block Homeland_Image">
                                <div class="Shelter"><img src={Home_Image} class="Homeland"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer>
                        <p>&copy; 2023 HavenForHomeless. All rights reserved.</p>
                    </footer>
                </div>

            </main>
            {/* ======= End Main ======= */}

            {/* JS Scripts Added */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            
        </div>
    );
}

export default Home;