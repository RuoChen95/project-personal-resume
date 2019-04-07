# project-personal-resume
It's a vue app coded by Ruochen Xie, which has the function of dynamic creating personal resume.

This is a personal project.

## Example of output
If running locally, it's a website which has a url: http://localhost:8081/#/.

## Design of the code
 1. connect db
 2. define router
 2. define session
 3. execute sql using session
 4. import results into html templates or redirect to another url

## Improvements
 1. Implement a decorator function to check user login status
 2. Implement the ON DELETE CASCADE
 3. Include the csrf_token, flask-seasurf, dealing with the CRUD problem

## How to run it

### Setup Project:
  ```
    npm run dev
  ```
  
### Launching the project locally:
  ```
    $ npm run serve
  ```
  
### Set up
  The web server contains four features:

  1. The CRUD of restaurant table
  2. The CRUD of menu table
  3. Return menu info using JSON
  4. authentication of github account

  run it using 
  ```
    python webserverUsingFlask.py
  ```

## Application Code Style

  Passing the pycodestyle (`pycodestyle --first webserverUsingFlask.py`) checking.