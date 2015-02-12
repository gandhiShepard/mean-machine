```json
{
  "name": "node-api",
  "main": "server.js",
  "dependencies": {
    "morgan": "~1.5.0",
    "express": "~4.10.3",
    "body-parser": "~1.9.3",
    "mongoose": "~3.8.19",
     "bcrypt-nodejs": "0.0.3"
  }
}
```

- **Express** - is the node framework
- **morgan** - log all requests to the console
- **mongoose** - is the ODM we will use to communicate with MongoDB
- **body-parser**  - will let us pull POST content from our HTTP request so that we can do things liike create a user
- **bcrypt-nodejs** - allow us to hash our passwords since it is never safe to store passwords plaintext in our DBs


## DB providers

- Modulus
- Mongolab


## Express Router and Routes

/api/users	         GET	    Get all the users
/api/users	         POST	    Create a user
/api/users/:user_id	 GET	    Get a single user
/api/users/:user_id	 PUT	    Update a user with new info
/api/users/:user_id	 DELETE	  Delete a user
