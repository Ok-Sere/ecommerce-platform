# ecommerce-platform

Automated pipeline for an e-commerce platform

---

## Project Overview

This project demonstrates a full-stack e-commerce platform with:
- A Node.js/Express backend API
- A React frontend
- Automated CI/CD using GitHub Actions
- Dockerization for both frontend and backend
- Cloud deployment on Render
- Live integration between frontend and backend

---

## Process & Steps

### 1. Repository & Directory Setup

Created a new GitHub repository and set up the project structure with separate directories for the backend (`api`) and frontend (`webapp`).

![1](./img/1.%20repo.jpg)
![2](./img/2.%20directories.jpg)

---

### 2. GitHub Integration

Connected the local project to GitHub for version control and collaboration.

![3](./img/3,%20github.jpg)

---

### 3. Backend API Development

Initialized the backend API using Node.js and Express, created the main entry point (`index.js`), and added necessary scripts to the backend’s `package.json`.

![4](./img/4.%20api.jpg)
![5](./img/5.%20index.jpg)
![6](./img/6.%20scrit%20in%20package.jpg)

---

### 4. Frontend Development

Initialized the frontend using Create React App and verified successful compilation.

![7](./img/7.%20webapp.jpg)
![8](./img/8.%20webpack%20compiled.jpg)
![9](./img/9.%20localhost.jpg)

---

### 5. Continuous Integration

Set up a GitHub Actions workflow for CI, ensuring code is built and tested on every push.

![10](./img/10.%20CI.jpg)

---

### 6. Dockerization

Created Dockerfiles for both the frontend and backend, built Docker images, and verified that both containers work as expected.

![11](./img/11.%20docker%20webapp.jpg)
![12](./img/12.%20docker%20api.jpg)
![13](./img/13.%20build%20docker%20api.jpg)
![13b](./img/13b.%20working.jpg)
![14](./img/14.%20build%20webapp.jpg)
![14b](./img/14b.%20build%20webapp%202.jpg)

---

### 7. Deployment to Render

Deployed the application to Render, a cloud platform, and confirmed successful deployment.

![15](./img/15,%20deploy.jpg)
![16](./img/16.%20deployed.jpg)

---

### 8. Frontend-Backend Integration

Edited the React frontend to fetch products from the deployed backend API and redeployed the frontend.

![17](./img/17.%20edit%20src.jpg)
![18](./img/18.%20redeploy.jpg)

---

### 9. Final Output

The deployed frontend displays the product list fetched from the backend API.

![19](./img/19.%20product%20list.jpg)

---

## Summary

This project provides a solid foundation for scalable, automated, and cloud-ready web applications.  
It covers the full workflow from local development to live deployment, with CI/CD, Docker, and cloud hosting, and is documented with step-by-step screenshots for clarity and reproducibility.



