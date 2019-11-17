# COMEM+ Web-Oriented Architecture Course
## Gameboard API
REST API developed with the Express framework and a MongoDB database. The API that allows the creation of personal collections of games

- The API manages users:
	- New users must be able to register.
	- Existing users must be able to authenticate.
- The API must provide at least 2 other types of resources:
	- Both types must be linked together (for example, aggregation or composition).
	- At least one of the types must be linked to the users.
- The API provide a minimum of CRUD operations to manage and use these types in a mobile application.
- The API use the knowledge acquired during the course:
	- At least one resource must be a paginated list.
	- At least one resource must be a list with optional filters.
	- At least one resource must provide aggregated data from other resources using a MongoDB aggregation pipeline.
- The API developed as a backend for a mobile application using at least 2 mobile hardware features :
Using the camera to add images to the game or go looking for the picture in the gallery of his smartphone.
	- At least one resource must have one or more images.
	- Sensitive operations must be protected by requiring valid authentication.
	- Authentication must be provided as a JWT token.
- The API must have a pub-sub component in real time:
	-	One or more of the following must be provided:
		- An endpoint ws: // or wss: // that an ordinary WebSockets client can connect to receive messages in real time.
		- A WAMP publication subject that a subscriber can subscribe to receive real-time messages.
	-	The WebSockets endpoint or WAMP topic must send real-time messages containing data relevant to the application.
	- The WebSockets endpoint or the WAMP topic may not be protected.

### Infrastructure

- The source code of your REST API must be in a repository on GitHub.
- Your REST API must be deployed on Heroku.

### Documentation

- Your REST API must be documented.
- The real-time component of your API must be documented (not necessarily the same).
### Automated test
- You must implement automated tests to test your REST API:
	- You must write tests for at least 4 distinct REST operations in your API. A test for each operation is enough.
	- Your tests must be reproducible.

### Quality of implementation

- Follow REST best practices:
	- REST resources must use the correct HTTP methods, headers, and status codes.
	- REST resources must have a consistent URL hierarchy and / or naming structure.
- Asynchronous code must be correct.
- Express routes must handle asynchronous operation errors.
- Avoid excessive code duplication.
- API must have basic validations on user input.
- API must validate the existence of related resources.

### bonus
...
### Checklist API
- Creat a user [=100% "100%"]
- log in to the API 90%
- 

### Delivery

Send an e-mail  _no later than  **November 18th 2019**_  to Simon Oulevay with:

-   Team : Ciampone Adrien, Colomberotto Teo, Provenzano Jérémie
-   The [link](https://github.com/Ilanss/ArchiOWeb-gameboard-api/tree/master/gameboardAPI) to source code repository on GitHub. 
-   The [link](https://dashboard.heroku.com/apps/archioweb-gameboardapi) to deployed REST API on Heroku
