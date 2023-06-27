import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/homePage.css';
import Home_Image from '../assets/img/Homeland_Image.png';

import Nav from '../navBar';
import Footer from '../Footer';

function Home() {
  const [data, setData] = useState(null);

  // Fetching data
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/tasks.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log(data);
      })
      .catch(error => console.error('Error:', error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* ======= Start Main ======= */}
      <main>
        <div className="header-blue">
          <Nav />
          <div className="container hero">
            <div className="row">
              <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 mt-5">
                <h1>Welcome to HavenForHomeless</h1>
                <p>We're dedicated to connecting those in need with local shelters and services.
                  Explore, find help, or contribute to your community today.
                </p>
                <Link to="/detail">
                  <button className="btn btn-light btn-lg action-button" type="button">Learn More</button>
                </Link>
              </div>
              <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block Homeland_Image">
                <div className="Shelter"><img src={Home_Image} className="Homeland" />
                </div>
              </div>
            </div>

            {/* WE COMMINTING THE MAPPING OVER DATA BECAUSE IT DID NOT LOOK GOOD ON OUR WEBSITE
            HOEVER, IT WORKS %100.*/}

            {/* Start: Mapping over data */}
            {/* {data.map(item => (
              <div key={item.id}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.Hours}</p>
              </div>
            ))} */}
            {/* End: Mapping over data */}

          </div>
          <Footer />
        </div>

      </main>
      {/* ======= End Main ======= */}
    </div>
  );
}

export default Home;
