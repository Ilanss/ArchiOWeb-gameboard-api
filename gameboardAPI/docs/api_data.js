define({ "api": [
  {
    "type": "delete",
    "url": "/users/:idUsers/collections/:idCollection",
    "title": "Delete a collection",
    "name": "DeleteCollection",
    "group": "Collection",
    "description": "<p>Permanently deletes a collection.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "DELETE https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97bc0/collections/58b2926f5e1def0123e97bc0 HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Collection",
    "parameter": {
      "fields": {
        "URL path parameters": [
          {
            "group": "URL path parameters",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>The unique identifier of the user to retrieve</p>"
          },
          {
            "group": "URL path parameters",
            "type": "Number",
            "optional": false,
            "field": "idCollection",
            "description": "<p>The unique identifier of the collection to retrieve</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No collection was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: text/plain\n\nNo collection found with ID 58b2926f5e1def0123e97281",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "patch",
    "url": "/users/:idUser/collections/:idCollection/:id",
    "title": "Update a collection",
    "name": "UpdateCollection",
    "group": "Collection",
    "description": "<p>Updates a collection's data (only the properties found in the request body will be updated). All properties are optional.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "PATCH /users/58b2926f5e1def0123e97281/collections/58b2926f5e1def0123e97281 HTTP/1.1\nContent-Type: application/json\n\n{\n  name : \"Ma super collection\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  \"id\": \"58b2926f5e1def0123e97281\",\n  \"name\": \"Ma super collection\",\n  \"link\": \"masupercollection\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the Collection</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the collection</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the collection</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Collection",
    "parameter": {
      "fields": {
        "URL path parameters": [
          {
            "group": "URL path parameters",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>The unique identifier of the user to retrieve</p>"
          },
          {
            "group": "URL path parameters",
            "type": "Number",
            "optional": false,
            "field": "idCollection",
            "description": "<p>The unique identifier of the collection to retrieve</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the collection</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "link",
            "description": "<p>Link of the collection</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No collection was found corresponding to the ID in the URL path</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422/UnprocessableEntity",
            "description": "<p>Some of the collection's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: text/plain\n\nNo collection found with ID 58b2926f5e1def0123e97281",
          "type": "json"
        },
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/games",
    "title": "Create a game",
    "name": "CreateGame",
    "group": "Game",
    "description": "<p>Registers a new game.</p>",
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>A unique identifier for the user generated by the server</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the game</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "    HTTP/1.1 201 Created\n    Content-Type: application/json\n    Location: https://archioweb-gameboardapi.herokuapp.com/games/58b2926f5e1def0123e97281\n\n     {\n    \"nb_players\": {\n        \"min\": 2,\n        \"max\": 8\n    },\n    \"age\": {\n        \"min\": 8,\n        \"max\": 99\n    },\n    \"_id\": \"5dc973c11371a342718d2ab0\",\n    \"name\": \"Uno\",\n    \"play_time\": 120,\n    \"setup_time\": 5,\n    \"pictures\": [\n        {\n            \"_id\": \"5dc973c11371a342718d2ab1\",\n            \"link\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n            \"name\": \"masuperphoto\",\n            \"date\": \"2019-11-10T23:00:00.000Z\"\n        }\n    ],\n    \"difficulty\": \"easy\",\n    \"category\": \"hasard\",\n    \"createdAt\": \"2019-11-11T14:44:17.738Z\",\n    \"updatedAt\": \"2019-11-11T14:44:17.743Z\",\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "    POST /games HTTP/1.1\n    Content-Type: application/json\n     { \n    \"name\": \"Uno\",\n    \"nb_players.min\": 2,\n    \"nb_players.max\": 8,\n    \"play_time\": 120,\n    \"setup_time\":5,\n    \"age.min\":8,\n    \"age.max\":99,\n    \"pictures\":[{\n        \"link\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n        \"name\":\"masuperphoto\",\n        \"date\": \"11.11.2019\"\n    }],\n    \"editor.id\":\"5da47887fe0c041bc418df12\",\n\"editor.name\":\"Mattel\",\n    \"difficulty\":\"easy\",\n        \"category\":\"hasard\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Game",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "play_time",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "setup_time",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>Age proposal for play the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "1..2",
            "optional": false,
            "field": "age.min",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "1..3",
            "optional": false,
            "field": "age.max",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Array of pictures of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "pictures.link",
            "description": "<p>Link of the picture</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "pictures.name",
            "description": "<p>name of the picture</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..12",
            "optional": false,
            "field": "pictures.date",
            "description": "<p>date of the picture</p>"
          },
          {
            "group": "Request body",
            "type": "Array",
            "optional": false,
            "field": "editor",
            "description": "<p>Editor of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..30}",
            "optional": false,
            "field": "editor.name",
            "description": "<p>Id editor of the game</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422/UnprocessableEntity",
            "description": "<p>Some of the game's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/games/:idGame",
    "title": "Delete a game",
    "name": "DeleteGame",
    "group": "Game",
    "description": "<p>Permanently deletes a game.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "DELETE https://archioweb-gameboardapi.herokuapp.com/games/58b2926f5e1def0123e97bc0 HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Game",
    "parameter": {
      "fields": {
        "URL path parameters": [
          {
            "group": "URL path parameters",
            "type": "String",
            "optional": false,
            "field": "idGame",
            "description": "<p>The unique identifier of the game to retrieve</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No game was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: text/plain\n\nNo game found with ID 58b2926f5e1def0123e97281",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/games/:id",
    "title": "Request a game's information",
    "name": "GetGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Unique identifier of the game</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>number player of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>number min player of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>number max player of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "play_time",
            "description": "<p>Duration party of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "setup_time",
            "description": "<p>Duration to setup the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>range age to play the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age.min",
            "description": "<p>age min to play the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age.max",
            "description": "<p>age max to play the game</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "picture",
            "description": "<p>array of pictures</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "difficulty",
            "description": "<p>level of difficulty of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "editor",
            "description": "<p>of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "editor.id",
            "description": "<p>id of the editor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "editor.name",
            "description": "<p>name of the editor</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games/:idGame",
    "title": "Get a game's information",
    "name": "GetGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idGame",
            "description": "<p>Unique identifier of the game</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>number player of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>number min player of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>number max player of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "play_time",
            "description": "<p>Duration party of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "setup_time",
            "description": "<p>Duration to setup the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>range age to play the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age.min",
            "description": "<p>age min to play the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "age.max",
            "description": "<p>age max to play the game</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "picture",
            "description": "<p>array of pictures</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "difficulty",
            "description": "<p>level of difficulty of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>category of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "editor",
            "description": "<p>of the game</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "editor.idEditor",
            "description": "<p>id of the editor</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "editor.name",
            "description": "<p>name of the editor</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Game"
  },
  {
    "type": "get",
    "url": "/games",
    "title": "Get list of games",
    "name": "RetrieveGames",
    "group": "Game",
    "description": "<p>Retrieves a paginated list of games ordered by name (in alphabetical order).</p>",
    "parameter": {
      "fields": {
        "URL query parameters": [
          {
            "group": "URL query parameters",
            "type": "String",
            "optional": true,
            "field": "directorId",
            "description": "<p>Select only movies directed by the person with the specified ID (this parameter can be given multiple times)</p>"
          },
          {
            "group": "URL query parameters",
            "type": "Number",
            "optional": true,
            "field": "rating",
            "description": "<p>Select only movies with the specified rating (exact match)</p>"
          },
          {
            "group": "URL query parameters",
            "type": "Number",
            "optional": true,
            "field": "ratedAtLeast",
            "description": "<p>Select only movies with a rating greater than or equal to the specified rating</p>"
          },
          {
            "group": "URL query parameters",
            "type": "Number",
            "optional": true,
            "field": "ratedAtMost",
            "description": "<p>Select only movies with a rating lesser than or equal to the specified rating</p>"
          },
          {
            "group": "URL query parameters",
            "type": "String",
            "optional": true,
            "field": "include",
            "description": "<p>Embed linked resources in the response body:</p> <ul> <li><code>&quot;director&quot;</code> for the game's director</li> </ul>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "GET /games?directorId=58b2926f5e1def0123e97bc0&page=2&pageSize=50 HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\nLink: &lt;https://evening-meadow-25867.herokuapp.com/api/movies?page=1&pageSize=50&gt;; rel=\"first prev\"\n\n[\n  {\n    \"id\": \"58b2926f5e1def0123e97281\",\n    \"title\": \"Die Hard\",\n    \"rating\": 7.4,\n    \"directorId\": \"58b2926f5e1def0123e97bc0\",\n    \"createdAt\": \"1988-07-12T00:00:00.000Z\"\n  },\n  {\n    \"id\": \"58b2926f5e1def0123e97282\",\n    \"title\": \"Die Hard With a Vengance\",\n    \"rating\": 8.3,\n    \"directorId\": \"58b2926f5e1def0123e97bc0\",\n    \"createdAt\": \"1995-05-19T00:00:00.000Z\"\n  }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the game</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Game"
  },
  {
    "type": "patch",
    "url": "/games/:idGame",
    "title": "Update a game",
    "name": "UpdateGame",
    "group": "Game",
    "description": "<p>Updates a game's data (only the properties found in the request body will be updated). All properties are optional.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "PATCH /games/58b2926f5e1def0123e97281 HTTP/1.1\nContent-Type: application/json\n\n{\n  name : \"Uno\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n  \"id\": \"58b2926f5e1def0123e97281\",\n  \"name\": \"Uno\",\n  \"nb_player.min\": \"2\"\n  \"nb_player.max\": \"8\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the game</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "Game",
    "parameter": {
      "fields": {
        "URL path parameters": [
          {
            "group": "URL path parameters",
            "type": "String",
            "optional": false,
            "field": "idGame",
            "description": "<p>The unique identifier of the game to retrieve</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "play_time",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "setup_time",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>Age proposal for play the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "1..2",
            "optional": false,
            "field": "age.min",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "1..3",
            "optional": false,
            "field": "age.max",
            "description": "<p>Link of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Array of pictures of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "pictures.link",
            "description": "<p>Link of the picture</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "pictures.name",
            "description": "<p>name of the picture</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..12",
            "optional": false,
            "field": "pictures.date",
            "description": "<p>date of the picture</p>"
          },
          {
            "group": "Request body",
            "type": "Array",
            "optional": false,
            "field": "editor",
            "description": "<p>Editor of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..30}",
            "optional": false,
            "field": "editor.name",
            "description": "<p>Id editor of the game</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No game was found corresponding to the ID in the URL path</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422/UnprocessableEntity",
            "description": "<p>Some of the game's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: text/plain\n\nNo game found with ID 58b2926f5e1def0123e97281",
          "type": "json"
        },
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/users",
    "title": "Create a user",
    "name": "CreateUser",
    "group": "User",
    "description": "<p>Registers a new user.</p>",
    "success": {
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>A unique identifier for the user generated by the server</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date creation of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date update of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "collections",
            "description": "<p>The collection of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<p>The version of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "personal_info",
            "description": "<p>Personal informations of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.firstname",
            "description": "<p>The firstname of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.mail",
            "description": "<p>The mail of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.password",
            "description": "<p>The password of the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "    HTTP/1.1 201 Created\n    Content-Type: application/json\n    Location: https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97281\n\n    {\n    \"personal_info\": {\n        \"firstname\": \"Adrien\",\n        \"lastname\": \"Chapy\",\n        \"mail\": \"chapy@gmail.com\",\n        \"password\": \"bob12345\"\n    },\n    \"_id\": \"5dc974f01371a342718d2ab2\",\n    \"username\": \"Skyggen\",\n    \"createdAt\": \"2019-11-11T14:49:20.282Z\",\n    \"updatedAt\": \"2019-11-11T14:49:20.284Z\",\n    \"collections\": [],\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "    POST /users HTTP/1.1\n    Content-Type: application/json\n\n{\n    \"username\": \"Skyggen\",\n    \"personal_info.firstname\": \"Adrien\",\n    \"personal_info.lastname\": \"Chapy\",\n    \"personal_info.mail\": \"chapy@gmail.com\",\n    \"personal_info.password\": \"bob12345\"\n}",
        "type": "json"
      }
    ],
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "personal_info",
            "description": "<p>Personal informations of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "2..50",
            "optional": false,
            "field": "personal_info.firstname",
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "2..50",
            "optional": false,
            "field": "personal_info.lastname",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "personal_info.mail",
            "description": "<p>Link of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "personal_info.password",
            "description": "<p>Link of the user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422/UnprocessableEntity",
            "description": "<p>Some of the game's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n \n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "delete",
    "url": "/users/:idUser",
    "title": "Delete a user",
    "name": "DeleteUser",
    "group": "User",
    "description": "<p>Permanently deletes a user.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "DELETE https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97bc0 HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "URL path parameters": [
          {
            "group": "URL path parameters",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>The unique identifier of the user to retrieve</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No user was found corresponding to the ID in the URL path</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: text/plain\n\nNo user found with ID 58b2926f5e1def0123e97281",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:idUser",
    "title": "Get a user's information",
    "version": "1.0.1",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>Unique identifier of the user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "personal_info",
            "description": "<p>personal info of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personal_info.firstname",
            "description": "<p>firstname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personal_info.lastname",
            "description": "<p>lastname of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personal_info.mail",
            "description": "<p>mail of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "personal_info.password",
            "description": "<p>hash password of the user</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "collection",
            "description": "<p>Array collection of the user</p>"
          }
        ]
      }
    },
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/users/:idUser",
    "title": "Update a user",
    "name": "UpdateUser",
    "group": "User",
    "description": "<p>Updates a user's data (only the properties found in the request body will be updated). All properties are optional.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "PATCH /users/58b2926f5e1def0123e97281 HTTP/1.1\nContent-Type: application/json\n\n{\n  username : \"Pipot23\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n{\"_id\":{\"$oid\":\"5da47304fe0c041bc418df11\"},\n\"username\":\"Skyggen\",\n\"personal_info\":\n    {\n        \"firstname\":\"Adrien\",\n        \"lastname\":\"Ciampone\",\n        \"mail\":\"adrienciampone@gmail.com\",\n        \"password\":\"bob12345\"\n    },\n\"collections\":[]",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "createdAt",
            "description": "<p>The date creation of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Date",
            "optional": false,
            "field": "updatedAt",
            "description": "<p>The date update of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "collections",
            "description": "<p>The collection of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "__v",
            "description": "<p>The version of the user</p>"
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "personal_info",
            "description": "<p>Personal informations of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.firstname",
            "description": "<p>The firstname of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.mail",
            "description": "<p>The mail of the user</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "personal_info.password",
            "description": "<p>The password of the user</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "URL path parameters": [
          {
            "group": "URL path parameters",
            "type": "Number",
            "optional": false,
            "field": "idUser",
            "description": "<p>The unique identifier of the user to retrieve</p>"
          }
        ],
        "Request body": [
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "username",
            "description": "<p>The username of the user</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "personal_info",
            "description": "<p>Personal informations of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "2..50",
            "optional": false,
            "field": "personal_info.firstname",
            "description": "<p>Firstname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "2..50",
            "optional": false,
            "field": "personal_info.lastname",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "personal_info.mail",
            "description": "<p>Link of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "personal_info.password",
            "description": "<p>Link of the user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "404/NotFound",
            "description": "<p>No user was found corresponding to the ID in the URL path</p>"
          },
          {
            "group": "Error 4xx",
            "type": "Object",
            "optional": false,
            "field": "422/UnprocessableEntity",
            "description": "<p>Some of the game's properties are invalid</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404 Not Found",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: text/plain\n\nNo user found with ID 58b2926f5e1def0123e97281",
          "type": "json"
        },
        {
          "title": "422 Unprocessable Entity",
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n \n}",
          "type": "json"
        }
      ]
    }
  }
] });
