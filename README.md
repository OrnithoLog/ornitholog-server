# ORNITHOLOG - Express API (Backend)

## Description

OrnithoLog is a single-page application designed for users to upload bird observations, providing information such as photos, species identification, and the location of the observed bird. Users can effortlessly display and filter these observations on an interactive map. Additionally, users have the option to view the comprehensive list of birds stored in the database.

## CRUD Operations
- READ *BirdModel* and *ObservationModel* (every user)
- CREATE, UPDATE, DELETE *BirdModel* (only admin)
- READ *ObservationModel* (every user)
- CREATE *Observation.model* (ony loggedin)
- UPDATE & DELETE *Observation.model* (ony loggedin and creator users)  
- CREATE *User.Model*

## Link To The Frontend 
> https://github.com/ornitholog/ornitholog-client

## How To Use It

1. Index page: to show companies list and filters (for all)
2. Detail page: company information (for all)
3. Add post page (for companies)
4. Edit/delete post page (for companies)
5. Saved companies page (for users)

## Project Demo
> https://ornitholog.netlify.app/



