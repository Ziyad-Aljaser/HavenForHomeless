import React from 'react';
import './Home.css';
import Home_Image from '../assets/img/Homeland_Image.png';
import Nav from '../nav';

function Home(){

    return(
        <div>   

            {/* ======= Start Main ======= */}
            <main>

                <div class="header-blue">
                    <Nav/>
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
          
        </div>
    );
}

export default Home;