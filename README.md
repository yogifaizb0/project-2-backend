# REST API MovieList App

Postman Documentation: https://documenter.getpostman.com/view/30849781/2s9Ykod29a#caa25555-95de-42c4-8e64-d4f125346be8

# Register and Login Method

Read method below to know how to create your own user and login afterwards.

**Register**
----
  Register as a new user in Movielist App.

* **URL**

  http://localhost:3000/register

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  * **Request Header**
    ```javascript
    {
        "Content-Type": "application/json"
    }
    ```
  
  * **Request Body**
    ```
    email         : string,
    password      : string
    ```
    ```javascript
    {
        "email": "your_email",
        "password": "your_password"
    }
    ```

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```javascript
    {
        "data": {
            "id": 1,
            "email": "test@mail.com"
        },
        "message": "Register success"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
    ```javascript
    {
        "error": "Bad Request",
        "msg": [
            "invalid email format"
        ]
    }
    ```
    ```javascript
    {
        "error": "Bad Request",
        "msg": [
            "Minimum password length: 8 characters"
        ]
    }
    ```

    OR  

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

**Login**
----
  Login movielist app with input email and password to gain access to movielist features.

* **URL**

  http://localhost:3000/login

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**

  * **Request Header**
    ```javascript
    {
        "Content-Type": "application/json"
    }
    ```
  
  * **Request Body**
    ```
    email         : string,
    password      : string
    ```
    ```javascript
    {
        "email": "your_email",
        "password": "your_password"
    }
    ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```javascript
    {
        "data": {
            "id": 1,
            "email": "mail@mail.com",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJtYWlsQG1haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkallGblZSRy9sSWZXVEp2Zi5PT3VHZUJJc0djSnhIa2ZLNFlCSzNyU2IvTnRNNGp3VUh4SGUiLCJpYXQiOjE1ODA4MTI3ODN9.MhnMnYvYEXSwq8XgeE-Ax2C4URYYQEeFqaUp8GrFb50"
        },
        "message": "Login success"
    }
    ```
    Note: <br>
    Copy your `output token`, which is required, to the `token` key in `headers`.
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:**
    ```javascript
    {
        "error": "Bad Request",
        "msg": [
            "Invalid email / password"
        ]
    }
    ```
    
    OR  

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

# MovieList Features

MovieList features required login for the first time. Read `Register and Login` section above to know how to `Login` or `Register` if you don't have any user

**Show All Movie**
----
  Returns json data of all MovieList from logged user.

* **URL**

  http://localhost:3000/movies

* **Method:**

  `GET`
  
*  **URL Params**

   None

* **Data Params**

  * **Request Header**
    ```javascript
    {
        "token": "your_token"
    }
    ```
    To get your token, see `Login` section.

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```javascript
    {
        "data": [
            {
                "id": 1,
                "title": "Movie Title",
                "genre": "Movie Genre",
                "director": "Director Name",
                "releaseYear": 2021,
                "userId": 1,
                "createdAt": "2020-02-04T10:49:31.969Z",
                "updatedAt": "2020-02-04T10:49:31.969Z"
            },
            {
                "id": 2,
                "title": "Movie Title 2",
                "genre": "Movie Genre 2",
                "director": "Director Name 2",
                "releaseYear": 2022,
                "userId": 1,
                "createdAt": "2020-02-04T10:49:31.969Z",
                "updatedAt": "2020-02-04T10:49:31.969Z"
            }
        ],
        "message": "Show all movies success"
    }
    ```
 
* **Error Response:**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

**Add New Movie**
----
  Adding new Movie with required title, genre, director, and releaseYear, and returns json data of a new created movie that will be added to logged user's movie list.

* **URL**

  http://localhost:3000/movies

* **Method:**

  `POST`
  
*  **URL Params**

   None

* **Data Params**
  * **Request Header**
    ```javascript
    {
        "Content-Type": "application/json"
        "token": "your_token"
    }
    ```
    To get your token, see `Login` section.
  
  * **Request Body**
    ```
    title         : string,
    genre         : string,
    director      : string,
    releaseYear   : integer
    ```
    ```javascript
    {
        "title": "Movie Title",
        "genre": "Movie Genre",
        "director": "Movie Director",
        "releaseYear": 2023
    }
    ```
  

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    ```javascript
    {
        "data": [
            {
                "id": 1,
                "title": "Movie Title",
                "genre": "Movie Genre",
                "director": "Movie Director",
                "releaseYear": 2023,
                "UserId": 1,
                "createdAt": "2020-02-04T10:49:31.969Z",
                "updatedAt": "2020-02-04T10:49:31.969Z"
            }
        ],
        "message": "Add Movie Success"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "error": "Bad Request",
    }
    ```

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

**Get One Movie by Id**
----
  Returns json data of one movie based on id input from logged user only.

* **URL**

  http://localhost:3000/movies/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
    ```javascript
    id=[integer]
    ```

* **Data Params**
    
    * **Request Header**
    ```javascript
    {
        "token": "your_token"
    }
    ```
    To get your token, see `Login` section.

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```javascript
    {
        "data": {
            "id": 4,
            "title": "The Prestige",
            "genre": "Mystery",
            "director": "Christopher Nolan",
            "releaseYear": 2006,
            "createdAt": "2020-02-03T10:47:46.184Z",
            "updatedAt": "2020-02-03T10:47:46.184Z"
        },
        "message": "One movie found"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```javascript
    {
        "error": "Not Found",
        "msg": [
            "movie with id 3 in user id 1 not found"
        ]
    }
    ```

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

**Update One Movie**
----
  Update movie from required movie id with required data params (only movie from logged user), and returns json data of updated movie data.

* **URL**

  http://localhost:3000/movies/:id

* **Method:**

  `PUT`
  
*  **URL Params**

   **Required:**
    ```javascript
    id=[integer]
    ```
    
* **Data Params**
    
    * **Request Header**
        ```javascript
        {
            "Content-Type": "application/json"
            "token": "your_token"
        }
        ```
        To get your token, see `Login` section.
  
    * **Request Body**
        ```
        title         : string,
        genre         : string,
        director      : string,
        releaseYear   : integer
        ```
        ```javascript
        {
            "title": "Barbie",
            "genre": "Drama",
            "director": "Greta Gerwig",
            "releaseYear": 2023
        }
        ```

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```javascript
    {
        "data": [
            null,
            {
                "id": 1,
                "title": "Barbie",
                "genre": "Drama",
                "director": "Greta Gerwig",
                "releaseYear": 2023,
                "UserId": 1,
                "createdAt": "2020-02-04T10:49:31.969Z",
                "updatedAt": "2020-02-04T13:58:03.190Z"
            }
        ],
        "message": "Movie data has edited successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** 
    ```javascript
    {
        "error": "Bad Request",
    }
    ```

    OR

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```javascript
    {
        "error": "Not Found",
        "msg": [
            "Movie with id 3 in user id 1 not found"
        ]
    }
    ```

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```

**Delete Movie by Id**
----
  Delete Movie data found by Id (only todo from logged user).

* **URL**

  http://localhost:3000/movies/:id

* **Method:**

  `DELETE`
  
*  **URL Params**

   **Required:**
    ```javascript
    id=[integer]
    ```

* **Data Params**
    
    * **Request Header**
    ```javascript
    {
        "token": "your_token"
    }
    ```
    To get your token, see `Login` section.

* **Success Response:**

  * **Code:** 200 OK <br />
    **Content:** 
    ```javascript
    {
        "data": 1,
        "message": "Movie data has been deleted successfully"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** 
    ```javascript
    {
        "error": "Not Found",
        "msg": [
            "Movie with id 11 in user id 1 not found"
        ]
    }
    ```

    OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content:** 
    ```javascript
    {
        "error": "Internal Server Error"
    }
    ```