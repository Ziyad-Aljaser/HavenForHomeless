# Table of Contents
- [About The Project](#about-the-project)
    - [Project Title](#project-title)
    - [Description](#description)
    - [Built With](#built-with)
    - [Project Tree Structure](#project-tree-structure)
- [Visuals](#visuals)
- [Features](#features)
- [Installation](#installation)
- [Contact](#contact)


# About The Project

## Project Title
**Haven For Homeless**

## Description
This project is a comprehensive online platform designed with React, aiming to provide assistance to homeless people. The website acts as a bridge, connecting those in need with providers offering various services such as shelters, food, and clothing. It further facilitates philanthropic individuals and organizations by providing them a streamlined avenue to donate and volunteer.

The website is built on the MERN stack - MongoDB, Express, React, and Node.js. It consists of several key pages, each serving a unique purpose:

The backend of this project utilizes Express.js to run an API server and fetch data from MongoDB. It is important to note that the project is logically separated into two primary folders - 'backend' and 'frontend', for a clean and clear separation of concerns.

For deployment, the backend is hosted on Render, while the frontend is hosted on Netlify. This project embodies our commitment to utilize technology in creating meaningful social impacts, directly aiming to alleviate the issue of homelessness.

## Built With
* **Backend**
    * ![image](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
    * ![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
    * ![image](https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black)
    * ![image](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white)

* **Frontend**
    * ![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
    * ![image](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
    * ![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
    * ![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
    * ![image](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

* **Database**
    * ![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## Project Tree Structure
```
haven-for-homeless
├───backend
├───frontend
│   ├───public
│   └───src
│       ├───assets
│       ├───components
│       ├───pages
│       └───Styles
└───Screenshots
```


# Visuals

**Home Page**

Signed in
![home-page-logedin.png](Screenshots%2Fhome-page-logedin.png)
Signed out
![home-page.png](Screenshots%2Fhome-page.png)
This page provides general information about the website, its mission, and its function.

**Available Services**

For The Homeless
![availableServices-page-homeless.png](Screenshots%2FavailableServices-page-homeless.png)
For The Givers
![availableServices-page-givers.png](Screenshots%2FavailableServices-page-givers.png)
This page categorizes and lists all the services available for the homeless, including shelters, food, and clothing. It also presents opportunities for philanthropic individuals and organizations, outlining ways to make donations, volunteer, and contribute resources like clothes.

**Create New Service**

![newServices.png](Screenshots%2FnewServices.png)
This page hosts a form to add a new service, which requires information about the service name, description, location, and operational hours.

**Details**

![serviceDetail-page.png](Screenshots%2FserviceDetail-page.png)
![serviceDetail-page-service.png](Screenshots%2FserviceDetail-page-service.png)
This page provides in-depth information about the listed services. The data for this page is fetched from our MongoDB database.

**Signup Page**

![signup-page.png](Screenshots%2Fsignup-page.png)
This page allows new users to create their accounts and join the platform

**Login Page**

![login-page.png](Screenshots%2Flogin-page.png)
This page enables existing users to access their accounts.


# Features
* **Cross-Platform Accessibility**

  One of the key features of this platform is its cross-platform accessibility. Designed with a responsive layout, it ensures a seamless user experience on various devices such as desktops, laptops, tablets, and smartphones. Regardless of the device used, users can effortlessly navigate through the website, view services, add new services, or access detailed information. This cross-platform compatibility broadens the reach of the platform, making it accessible to a larger audience and hence increasing its impact on homeless assistance
  
  **Ex.**

  ![Cross-Platform.jpeg](Screenshots%2FCross-Platform.jpeg)

* **MERN Stack Implementation**

  The platform leverages the MERN stack, a powerful, full-stack JavaScript solution that combines MongoDB, Express.js, React.js, and Node.js for end-to-end application development

* **Detailed Service Information**

  The 'Details' page on the platform provides an in-depth overview of each listed service. Leveraging the data stored in MongoDB, it provides comprehensive details about the service providers, the nature of the services, their location, availability, and more. This feature ensures users have all the necessary information before they decide to avail or provide a service


# Installation
**Backend**

``
The server starts on: http://localhost:3001/api/cards
``
```
1- cd backend
2- node app.js
```
**Frontend**
```
1- cd frontend
2- npm install
3- npm start
```

# Contact
[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:Ziyad.M.Aljaser@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ziyad-aljaser/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Ziyad-Aljaser)
