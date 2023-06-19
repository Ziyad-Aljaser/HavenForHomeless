import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/detailPage.css';

import Nav from '../navBar';
import Footer from '../Footer';

const Card = ({ title, serviceName, description }) => {
    const [showCardBody, setShowCardBody] = useState(false);

    const handleCardClick = () => {
        setShowCardBody(!showCardBody);
    }

    return (
        <div className="col-12 col-md-8 col-lg-6 mx-auto mb-4">
            <div className="card-container" onClick={handleCardClick}>
                <div className="card_header">
                    <h2>{title}</h2>
                </div>
                {showCardBody && (
                    <div className="card-body">
                        <h5 className="card-title">Service Name: {serviceName}</h5>
                        <p className="card-text">{description}</p>
                        <Link className="btn btn-light action-button" to="/">Go back</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

function Detail() {
    return (
        <div>   
            {/* ======= Start Main ======= */}
            <main>
                <div className="header-blue-DP">
                    <Nav/>
                    <div className="container hero my-5">
                        <h1 className="mb-4 text-center">Service Details</h1>
                        <div className="row justify-content-center">

                            <Card 
                                title="Shelter Service" 
                                serviceName="Safe Haven" 
                                description="Safe Haven is a shelter service designed for individuals
                                and families that need temporary housing. We provide
                                warm meals, comfortable sleeping facilities, and
                                comprehensive support services to help our guests find
                                their footing and transition into stable housing. Our
                                team of professional social workers and volunteers are
                                here to assist in any way possible." 
                            />

                            <Card 
                                title="Food Service" 
                                serviceName="Food Delivery" 
                                description="Food Delivery is a service designed for individuals and
                                families that need meals delivered to their homes. We
                                provide nutritious meals, tailored to the dietary needs
                                of our clients. Our team of professional chefs and
                                volunteers are here to ensure you receive delicious,
                                healthy meals."
                            />

                            <Card 
                                title="Clothes Service" 
                                serviceName="Clothes Donation" 
                                description="Clothes Donation is a service designed for individuals
                                and families that need clothing assistance. We provide
                                clothes of all sizes, tailored to the needs of our
                                clients. Our team of volunteers and workers are here to
                                ensure you receive necessary clothing." 
                            />
                            
                        </div>
                    </div>  
                    <Footer/>
                </div>
            </main>
            {/* ======= End Main ======= */}
        </div>
    );
}

export default Detail;
