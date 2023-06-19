import React from 'react';
import './availableServices.css'; 
import Icon from '../assets/img/Icon.png';
import Shelters from '../assets/img/shelters.jfif';
import Food from '../assets/img/food.jpg';
import Clothes from '../assets/img/clothes.jpg';
import Money from '../assets/img/Money.webp';
import Volunteer from '../assets/img/volunteer.png';
import DonatingClothes from '../assets/img/DonatingClothes.jpg';

function Av() {
    return (
        <div>
            <main>
                <div className="header-blue">
                    <nav className="navbar navbar-dark navbar-expand-md">
                        <div className="container">
                            <img src={Icon} alt="Logo" />
                            <div className="navbar-brand">HavenForHomeless</div>
                            <div>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/about">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/contact">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <header>
                        <h1>For The Homeless</h1>
                    </header>
                    <section className="service-list">
                        <Article 
                            img={Shelters} 
                            altImg="Shelters Picture" 
                            title="Shelters" 
                            description="At Haven For Homeless, we believe..."
                            hours="Hours: 24 hours" 
                        />
                        <Article 
                            img={Food} 
                            altImg="Serving Food Picture" 
                            title="Food" 
                            description="Welcome to Haven For Homeless, a dedicated service..."
                            hours="Hours: 17:00 - 19:00 hours"
                        />
                        <Article 
                            img={Clothes} 
                            altImg="Clothes Picture" 
                            title="Clothes" 
                            description="At Haven For Homeless, we recognize the importance..."
                            hours="Hours: 11:00 - 13:00 hours"
                        />
                    </section>
                    <h1>For The Givers</h1>
                    <section className="service-list">
                        <Article 
                            img={Money} 
                            altImg="Donating Money Picture" 
                            title="Donating Your Money" 
                            description="Welcome to Haven For Homeless, where your financial contribution..."
                            hours="Hours: 24 hours" 
                        />
                        <Article 
                            img={Volunteer} 
                            altImg="volunteers Picture" 
                            title="Volunteers" 
                            description="We are seeking dedicated individuals like you..."
                            hours="Hours: 17:00 - 19:00 hours"
                        />
                        <Article 
                            img={DonatingClothes} 
                            altImg="Donating Clothes Picture" 
                            title="Donating Clothes" 
                            description="Your gently used clothes can make a world..."
                            hours="Hours: 11:00 - 13:00 hours"
                        />
                    </section>
                </div>
                <footer>
                    <p>&copy; 2023 HavenForHomeless. All rights reserved.</p>
                </footer>
            </main>
        </div>
    )
}

function Article({img, altImg, title, description, hours}) {
    return (
        <article className="service">
            <img src={img} alt={altImg} />
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{hours}</p>
        </article>
    )
}

export default Av;
