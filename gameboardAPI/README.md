
# COMEM+ Web-Oriented Architecture Course
## Gameboard API
REST API developed with the Express framework and a MongoDB database. The API that allows the creation of personal collections of games
## Gameboard API
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

### Delivery

Send an e-mail  _no later than  **November 18th 2019**_  to Simon Oulevay with:

-   Team : Ciampone Adrien, Colomberotto Teo, Provenzano Jérémie
-   The [link](https://github.com/Ilanss/ArchiOWeb-gameboard-api/tree/master/gameboardAPI) to source code repository on GitHub. 
-   The [link]( https://archioweb-gameboardapi.herokuapp.com/) to deployed REST API on Heroku
- Read the [full documentation]( https://archioweb-gameboardapi.herokuapp.com/) to know more. The documentation of the API is also available at the index page of the app.

### API Progress
|Task | Progressbar | Todo/Tofix |
|--|--|--|
| Get methodes User(Users, UserId, aggregation nbrGames) |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Get methodes Game (Games, GamesId, filter Difficulty, Pagination) |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Get methodes Collection(idUsers, idCollection, ListGames) |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Post methodes Game(addGame) |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Post methodes Collection(addCollection) |🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪️|generate Slug|
| Post methodes Log in to the API | 🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Post methodes Create a user |🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪️|checkemail uniqueness|
| Patch methodes User(idUser) |🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪️|email obligatory|
| Patch methodes Game(idGame) |🔵🔵🔵🔵🔵🔵🔵🔵⚪️⚪️|fields to be completed|
| Patch methodes Collection(idCollecton) |🔵🔵🔵🔵🔵⚪️⚪️⚪️⚪️⚪️|check idCollection...|
| Delete methodes user (idUser) |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Delete methodes game (idGame) |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Delete methodes collection (idCollection)|🔵🔵🔵🔵🔵🔵⚪️⚪️⚪️⚪️|check token|
| Websocket Backend |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| APIDoc of the API |🔵🔵🔵🔵🔵🔵🔵🔵🔵⚪️||
| Minimal Tests |🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵||
| Advanced Tests |🔵🔵⚪️⚪️⚪️⚪️⚪️⚪️⚪️⚪️||

## Requirements

Node.js 12.x MongoDB 4.x

## Usage

```
git clone git@github.com:Ilanss/ArchiOWeb-gameboard-api.git
cd archioweb-rest-api
npm ci
npm start

```

Visit  [http://localhost:3000](http://localhost:3000/).

To automatically reload the code and re-generate the API documentation on changes, use npm run dev instead of npm start.

## Real-time component

Websocket is implemented for the real-time component. An insight message is generated every time a user create a game. The message format is generated, like this :

```
  A new game called : (Gamename) is avaiable.

```

The websocket service is available at this URL :

ws://{PATH_to_the_application} For example, if you work on your machine, the path should be like this :

ws://localhost:3000/

## Configuration

The app will attempt to connect to the MongoDB database at mongodb://localhost/gameboard by default.

Use the $DATABASE_URL or the $MONGODB_URI environment variables to specify a different connection URL.
