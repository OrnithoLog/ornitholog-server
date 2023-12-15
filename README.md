# OrnithoLog - Express API (Backend)

## Description

OrnithoLog is a single-page application designed for users to upload bird observations, providing information such as photos, species identification, and the location of the observed bird. Users can effortlessly display and filter these observations on an interactive map. Additionally, users have the option to view the comprehensive list of birds stored in the database.

## CRUD Operations
- READ *BirdModel* and *ObservationModel* (every user)
- CREATE, UPDATE, DELETE *BirdModel* (only admin)
- READ *ObservationModel* (every user)
- CREATE *Observation.model* (only logged-in)
- UPDATE & DELETE *Observation.model* (only logged-in and creator users)  
- CREATE *User.Model*

## Link To The Frontend 
> https://github.com/ornitholog/ornitholog-client

## How To Use It Locally
1. to clone the project, run `git clone https://github.com/ornitholog/ornitholog-server.git`
2. install all the dependencies `npm install`
3. create an `.env` file in the root to add the following environment variables `PORT=5005`, `ORIGIN=http://localhost:5173`, `TOKEN_SECRET=y0uRt0k3N$eCr3T`
4. to run the application, run `npm run dev`

## Project Demo
> https://ornitholog.netlify.app/



