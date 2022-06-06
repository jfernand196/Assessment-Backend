Explaining use assestment backend

Note: 1. For init the server use: npm start or npm run dev command
      2. I don't use .env
      3. The questions are in Mission Report
      
1. Register a new user: 

    For this, you use the path in postman http://localhost:3000/auth/local/signup with POST method
    Body request: {
    "email": "juanbuitrago@prueba.com" ,
    "password": "123456"
    }
    Response: {
    "success": true,
    "user": "juanbuitrago@prueba.com"
    }
    the password was encripted with bcryptjs library

2. Login the user created:
   Use the path http://localhost:3000/auth/local/login with POST method
   Body request: 
    {
        "email": "juanbuitrago@prueba.com" ,
        "password": "123456"
    }
    Response: 
        {
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWU2ZDUxOWZiZDFiM2QyY2E1YjE3MSIsImVtYWlsIjoianVhbmJ1aXRyYWdvQHBydWViYS5jb20iLCJpYXQiOjE2NTQ1NTAxNTksImV4cCI6MTY1NDYzNjU1OX0.an8woCKqZufyJabEdZxa9k-q2aMyTF9J-e-K0AG3sVw"
        }

    In the page of JWT, the token was validate and the PAYLOAD has:
        {
            "id": "629e6d519fbd1b3d2ca5b171",
            "email": "juanbuitrago@prueba.com",
            "iat": 1654550159,
            "exp": 1654636559
        }

3. Create tasks:
    Use the path http://localhost:3000/api/favs with POST method and auth: Bearer Token
    Body request: 
        { 
            "name":"Courses",
            "items":[
                    { 
                        "title":"JavaScript",
                        "description":"Advanced Course",
                        "link":"https://www.youtube.com/watch?v=RxMafJh_ZSw" 
                    },
                    { 
                        "title":"React",
                        "description":"Course with chores",
                        "link":"https://www.youtube.com/watch?v=_0FHpdMwZFM&list=PLxyfMWnjW2kssQROHucUJiRfW0FUhcVzN" 
                    },
                    { 
                        "title":"Node js",
                        "description":"Basic Course",
                        "link":"https://www.youtube.com/watch?v=EKseAAm4pvY" 
                    }
                    ] 
            }
        
  Response: 
    {
        "success": true,
        "data": {
            "user": "629e6d519fbd1b3d2ca5b171",
            "name": "Courses",
            "items": [
                {
                    "title": "JavaScript",
                    "description": "Advanced Course",
                    "link": "https://www.youtube.com/watch?v=RxMafJh_ZSw",
                    "_id": "629e72789fbd1b3d2ca5b176"
                },
                {
                    "title": "React",
                    "description": "Course with chores",
                    "link": "https://www.youtube.com/watch?v=_0FHpdMwZFM&list=PLxyfMWnjW2kssQROHucUJiRfW0FUhcVzN",
                    "_id": "629e72789fbd1b3d2ca5b177"
                },
                {
                    "title": "Node js",
                    "description": "Basic Course",
                    "link": "https://www.youtube.com/watch?v=EKseAAm4pvY",
                    "_id": "629e72789fbd1b3d2ca5b178"
                }
            ],
            "_id": "629e72789fbd1b3d2ca5b175"
        }
    }

4. Get all task:
    Use the path http://localhost:3000/api/favs with GET method and auth: Bearer Token
    Body request: Nothing
    Response:
        {
            "success": true,
            "Allfavs": [
                {
                    "_id": "629e72789fbd1b3d2ca5b175",
                    "user": "629e6d519fbd1b3d2ca5b171",
                    "name": "Courses",
                    "items": [
                        {
                            "title": "JavaScript",
                            "description": "Advanced Course",
                            "link": "https://www.youtube.com/watch?v=RxMafJh_ZSw",
                            "_id": "629e72789fbd1b3d2ca5b176"
                        },
                        {
                            "title": "React",
                            "description": "Course with chores",
                            "link": "https://www.youtube.com/watch?v=_0FHpdMwZFM&list=PLxyfMWnjW2kssQROHucUJiRfW0FUhcVzN",
                            "_id": "629e72789fbd1b3d2ca5b177"
                        },
                        {
                            "title": "Node js",
                            "description": "Basic Course",
                            "link": "https://www.youtube.com/watch?v=EKseAAm4pvY",
                            "_id": "629e72789fbd1b3d2ca5b178"
                        }
                    ]
                }
            ]
        }

5. Get task for id:
    Use the path http://localhost:3000/api/favs/:id with GET method and auth: Bearer Token. for example: 
    http://localhost:3000/api/favs/629e72789fbd1b3d2ca5b175
    Body request: Nothing
    Response:
      {
            "_id": "629e72789fbd1b3d2ca5b175",
            "user": "629e6d519fbd1b3d2ca5b171",
            "name": "Courses",
            "items": [
                {
                    "title": "JavaScript",
                    "description": "Advanced Course",
                    "link": "https://www.youtube.com/watch?v=RxMafJh_ZSw",
                    "_id": "629e72789fbd1b3d2ca5b176"
                },
                {
                    "title": "React",
                    "description": "Course with chores",
                    "link": "https://www.youtube.com/watch?v=_0FHpdMwZFM&list=PLxyfMWnjW2kssQROHucUJiRfW0FUhcVzN",
                    "_id": "629e72789fbd1b3d2ca5b177"
                },
                {
                    "title": "Node js",
                    "description": "Basic Course",
                    "link": "https://www.youtube.com/watch?v=EKseAAm4pvY",
                    "_id": "629e72789fbd1b3d2ca5b178"
                }
            ]
        }  

6. Delete task for id:
    Use the path http://localhost:3000/api/favs/:id with DELETE method and auth: Bearer Token. for example: 
    http://localhost:3000/api/favs/629e72789fbd1b3d2ca5b175
    Body request: Nothing
    Response: 
        {
            "success": true,
            "message": "Fav deleted"
        }



