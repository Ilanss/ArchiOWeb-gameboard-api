define({ "api": [
  {
    "type": "post",
    "url": "/reset",
    "title": "Reset the API",
    "name": "Reset",
    "group": "Admin",
    "description": "<p>Permanently deletes users, games &amp; collections.</p>",
    "success": {
      "examples": [
        {
          "title": "204 No Content",
          "content": "HTTP/1.1 204 No Content",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>The password of the User is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401:",
          "content": "HTTP/1.1 401 Unauthorized\nContent-Type: application/json; charset=utf-8\n{\n     \"status\": 401,\n     \"message\": \"invalid password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/admin.js",
    "groupTitle": "Admin"
  },
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
            "type": "String",
            "optional": false,
            "field": "idUser",
            "description": "<p>The unique identifier of the user to retrieve</p>"
          },
          {
            "group": "URL path parameters",
            "type": "String",
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
    "type": "get",
    "url": "/users/:idUser/collections",
    "title": "Get list of collection from a user",
    "name": "RetrieveCollection",
    "group": "Collection",
    "description": "<p>Retrieves  list of collection from a user.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections\n\n[\n    {\n        \"games\": [{\"id\":\"5dcbd9d46c1482b9fd4ce158\"},{\"id\":\"5dcbd9df6c1482b9fd4ce15a\"}],\n        \"_id\": \"5dc96e39669be23ffb3a426a\",\n        \"name\": \"Collection\",\n        \"link\": \"url\"\n    },\n{\n        \"games\": [{\"id\":\"5dcbd9d46c1482b9fd4ce158\"},{\"id\":\"5dcbd9df6c1482b9fd4ce15a\"}],\n        \"_id\": \"5dc96e39669be23ffb3a426a\",\n        \"name\": \"Collection2\",\n        \"link\": \"url\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
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
    "groupTitle": "Collection"
  },
  {
    "type": "get",
    "url": "/users/:idUser/collections/:idCollection",
    "title": "Get a collection from a user",
    "name": "RetrieveCollection",
    "group": "Collection",
    "description": "<p>Retrieves  a collection from a user.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96e39669be23ffb3a426a HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96e39669be23ffb3a426a\n\n[\n    {\n        \"games\": [{\"id\":\"5dcbd9d46c1482b9fd4ce158\"},{\"id\":\"5dcbd9df6c1482b9fd4ce15a\"}],\n        \"_id\": \"5dc96e39669be23ffb3a426a\",\n        \"name\": \"Collection\",\n        \"link\": \"url\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
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
    "groupTitle": "Collection"
  },
  {
    "type": "patch",
    "url": "/users/:idUser/collections/:idCollection",
    "title": "Update a collection",
    "name": "UpdateCollection",
    "group": "Collection",
    "description": "<p>Updates a collection's data (only the properties found in the request body will be updated). All properties are optional.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "PATCH /users/58b2926f5e1def0123e97281/collections/58b2926f5e1def0123e97281 HTTP/1.1\nContent-Type: application/json\n\n{\n  \"name\" : \"Ma super collection\"\n}",
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
            "type": "String",
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
            "type": "String",
            "optional": false,
            "field": "idUser",
            "description": "<p>The unique identifier of the user to retrieve</p>"
          },
          {
            "group": "URL path parameters",
            "type": "String",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:idUser/collections/:idCollection/games",
    "title": "Get game from a user collection",
    "name": "getGameFromCollection",
    "group": "Collection",
    "description": "<p>Get game from a collection.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96b5aa875243c200fca6b/games HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/collections/5dc96b5aa875243c200fca6b/games\n\n[{\"id\":\"5dcbd9d46c1482b9fd4ce158\"},{\"id\":\"5dcbd9df6c1482b9fd4ce15a\"}]",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
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
    "groupTitle": "Collection"
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
            "type": "String",
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
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>Nb player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>min player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>max player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "play_time",
            "description": "<p>Play time of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "setup_time",
            "description": "<p>setup time of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>Age proposal for play the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "age.min",
            "description": "<p>min age of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "age.max",
            "description": "<p>max age of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Array of pictures of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.link",
            "description": "<p>Link of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.name",
            "description": "<p>name of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.date",
            "description": "<p>date of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "editor",
            "description": "<p>Editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "editor.name",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Id of the creator of the game</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "HTTP/1.1 201 Created\nContent-Type: application/json\nLocation: https://archioweb-gameboardapi.herokuapp.com/games/58b2926f5e1def0123e97281\n\n {\n            \"nb_players\": {\n                \"min\": 2,\n                \"max\": 8\n            },\n            \"age\": {\n                \"min\": 8,\n                \"max\": 99\n            },\n            \"_id\": \"5dc973c11371a342718d2ab0\",\n            \"name\": \"Uno\",\n            \"play_time\": 120,\n            \"setup_time\": 5,\n            \"pictures\": [\n                {\n                    \"_id\": \"5dc973c11371a342718d2ab1\",\n                    \"link\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n                    \"name\": \"masuperphoto\",\n                    \"date\": \"2019-11-10T23:00:00.000Z\"\n                }\n            ],\n            \"difficulty\": \"easy\",\n            \"category\": \"hasard\",\n            \"createdAt\": \"2019-11-11T14:44:17.738Z\",\n            \"updatedAt\": \"2019-11-11T14:44:17.743Z\",\n            \"createdBy\":\"5dc973c23371a342718d2ab1\",\n            \"__v\": 0\n        }",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "    POST /games HTTP/1.1\n    Content-Type: application/json\n{\n            \"name\": \"Uno\",\n            \"nb_players.min\": 2,\n            \"nb_players.max\": 8,\n            \"play_time\": 120,\n            \"setup_time\":5,\n            \"age.min\":8,\n            \"age.max\":99,\n            \"pictures\":[{\n                \"link\":\"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n                \"name\":\"masuperphoto\",\n                \"date\": \"11.11.2019\"\n                }],\n               \"editor.id\":\"5da47887fe0c041bc418df12\",\n               \"editor.name\":\"Mattel\",\n               \"difficulty\":\"easy\",\n               \"category\":\"hasard\"\n            }",
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
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>Nb player of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>min player of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>max player of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "play_time",
            "description": "<p>Play time of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "setup_time",
            "description": "<p>setup time of the game</p>"
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
            "description": "<p>min age of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "1..3",
            "optional": false,
            "field": "age.max",
            "description": "<p>max age of the game</p>"
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
            "type": "String",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..30",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n\n}",
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
    "url": "/games/:idGame",
    "title": "Get a game's information",
    "name": "GetGame",
    "group": "Game",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
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
            "type": "String",
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
    "url": "/games/difficulty/:level",
    "title": "Request games by difficulty",
    "name": "GetGameByDifficulty",
    "group": "Game",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "string",
            "optional": false,
            "field": "difficulty",
            "description": "<p>Get games by difficulty</p>"
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
            "type": "String",
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
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Id of the creator of the game</p>"
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
    "description": "<p>Retrieves a paginated list of games ordered by creation date.</p>",
    "parameter": {
      "fields": {
        "URL query parameters": [
          {
            "group": "URL query parameters",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>The page to retrieve (defaults to 1)Ordre de grandeur : 1..</p>"
          },
          {
            "group": "URL query parameters",
            "type": "Number",
            "optional": true,
            "field": "pageSize",
            "description": "<p>The number of elements to retrieve in one page (defaults to 100)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example",
        "content": "GET https://archioweb-gameboardapi.herokuapp.com/games?page=1&pageSize=10 HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://archioweb-gameboardapi.herokuapp.com/games?page=1&pageSize=10&gt;; rel=\"first prev\"\n\n[\n    {\n        \"_id\": \"5dc96a7ba875243c200fca6a\",\n        \"name\": \"Shabadabada\",\n        \"createdAt\": \"2019-11-11T14:04:43.934Z\",\n        \"updatedAt\": \"2019-11-11T14:04:43.935Z\",\n        \"pictures\": [],\n        \"createdBy\":\"5dc96a7ba832243c200fca6a\",\n        \"__v\": 0\n    },\n    {\n        \"nb_players\": {\n            \"min\": 2,\n            \"max\": 3\n        },\n        \"age\": {\n            \"min\": 8,\n            \"max\": 99\n        },\n        \"_id\": \"5dcbd9d46c1482b9fd4ce158\",\n        \"name\": \"Uno\",\n        \"play_time\": 120,\n        \"setup_time\": 5,\n        \"pictures\": [\n            {\n                \"_id\": \"5dcbd9d46c1482b9fd4ce159\",\n                \"link\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n                \"name\": \"masuperphoto\",\n                \"date\": \"2019-11-10T23:00:00.000Z\"\n            }\n        ],\n        \"difficulty\": \"easy\",\n        \"category\": \"hasard\",\n        \"createdAt\": \"2019-11-13T10:24:20.004Z\",\n        \"updatedAt\": \"2019-11-13T10:24:20.018Z\",\n        \"createdBy\":\"5dc96a7ba832243c200fca6a\",\n        \"__v\": 0\n    },\n    {\n        \"nb_players\": {\n            \"min\": 2,\n            \"max\": 3\n        },\n        \"age\": {\n            \"min\": 8,\n            \"max\": 99\n        },\n        \"_id\": \"5dcbd9df6c1482b9fd4ce15a\",\n        \"name\": \"Uno\",\n        \"play_time\": 120,\n        \"setup_time\": 5,\n        \"pictures\": [\n            {\n                \"_id\": \"5dcbd9df6c1482b9fd4ce15b\",\n                \"link\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n                \"name\": \"masuperphoto\",\n                \"date\": \"2019-11-10T23:00:00.000Z\"\n            }\n        ],\n        \"difficulty\": \"easy\",\n        \"category\": \"hasard\",\n        \"createdAt\": \"2019-11-13T10:24:31.280Z\",\n        \"updatedAt\": \"2019-11-13T10:24:31.291Z\",\n        \"createdBy\":\"5dc96a7ba832243c200fca6a\",\n        \"__v\": 0\n    },\n    {\n        \"nb_players\": {\n            \"min\": 2,\n            \"max\": 8\n        },\n        \"age\": {\n            \"min\": 8,\n            \"max\": 99\n        },\n        \"_id\": \"5dc973c11371a342718d2ab0\",\n        \"name\": \"Uno 2\",\n        \"play_time\": 120,\n        \"setup_time\": 5,\n        \"pictures\": [\n            {\n                \"_id\": \"5dc973c11371a342718d2ab1\",\n                \"link\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n                \"name\": \"masuperphoto\",\n                \"date\": \"2019-11-10T23:00:00.000Z\"\n            }\n        ],\n        \"difficulty\": \"easy\",\n        \"category\": \"hasard\",\n        \"createdAt\": \"2019-11-11T14:44:17.738Z\",\n        \"updatedAt\": \"2019-11-17T14:50:32.724Z\",\n        \"__v\": 0,\n        \"createdBy\": \"5dc974f01371a342718d2ab2\"\n    },\n    {\n        \"nb_players\": {\n            \"min\": 2,\n            \"max\": 3\n        },\n        \"_id\": \"5dc96b5aa875243c200fca6b\",\n        \"name\": \"Fantasy\",\n        \"play_time\": 120,\n        \"createdAt\": \"2019-11-11T14:08:26.784Z\",\n        \"updatedAt\": \"2019-11-11T14:08:26.785Z\",\n        \"pictures\": [],\n        \"__v\": 0,\n        \"createdBy\": \"5dc974f01371a342718d2ab2\"\n    },\n    {\n        \"_id\": \"5dd16d7c7d6ca14f6abf974c\",\n        \"name\": \"Happy hour\",\n        \"createdAt\": \"2019-11-17T15:55:40.774Z\",\n        \"updatedAt\": \"2019-11-17T15:55:40.793Z\",\n        \"pictures\": [],\n        \"__v\": 0,\n        \"createdBy\": \"5dc974f01371a342718d2ab2\"\n    },\n    {\n        \"_id\": \"5dd16d9df340254fd6f3821a\",\n        \"name\": \"MotDingo\",\n        \"createdAt\": \"2019-11-17T15:56:13.055Z\",\n        \"updatedAt\": \"2019-11-17T15:56:13.059Z\",\n        \"pictures\": [],\n        \"__v\": 0,\n        \"createdBy\": \"5dc974f01371a342718d2ab2\"\n    }\n]",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
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
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>Nb player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>min player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>max player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "play_time",
            "description": "<p>Play time of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "setup_time",
            "description": "<p>setup time of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>Age proposal for play the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "age.min",
            "description": "<p>min age of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "age.max",
            "description": "<p>max age of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Array of pictures of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.link",
            "description": "<p>Link of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.name",
            "description": "<p>name of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.date",
            "description": "<p>date of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "editor",
            "description": "<p>Editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "editor.name",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Id of the creator of the game</p>"
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
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n {\n            \"nb_players\": {\n                \"min\": 2,\n                \"max\": 8\n            },\n            \"age\": {\n                \"min\": 8,\n                \"max\": 99\n            },\n            \"_id\": \"5dc973c11371a342718d2ab0\",\n            \"name\": \"Uno\",\n            \"play_time\": 120,\n            \"setup_time\": 5,\n            \"pictures\": [\n                {\n                    \"_id\": \"5dc973c11371a342718d2ab1\",\n                    \"link\": \"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Baraja_de_UNO.JPG/440px-Baraja_de_UNO.JPG\",\n                    \"name\": \"masuperphoto\",\n                    \"date\": \"2019-11-10T23:00:00.000Z\"\n                }\n            ],\n            \"difficulty\": \"easy\",\n            \"category\": \"hasard\",\n            \"createdAt\": \"2019-11-11T14:44:17.738Z\",\n            \"updatedAt\": \"2019-11-11T14:44:17.743Z\",\n            \"createdBy\":\"5dc973c23371a342718d2ab1\",\n            \"__v\": 0\n        }",
          "type": "json"
        }
      ],
      "fields": {
        "Response body": [
          {
            "group": "Response body",
            "type": "String",
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
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>Nb player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>min player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>max player of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "play_time",
            "description": "<p>Play time of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "setup_time",
            "description": "<p>setup time of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Object",
            "optional": false,
            "field": "age",
            "description": "<p>Age proposal for play the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "age.min",
            "description": "<p>min age of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Number",
            "optional": false,
            "field": "age.max",
            "description": "<p>max age of the game</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "pictures",
            "description": "<p>Array of pictures of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.link",
            "description": "<p>Link of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.name",
            "description": "<p>name of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "pictures.date",
            "description": "<p>date of the picture</p>"
          },
          {
            "group": "Response body",
            "type": "Array",
            "optional": false,
            "field": "editor",
            "description": "<p>Editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "editor.name",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Response body",
            "type": "String",
            "optional": false,
            "field": "createdBy",
            "description": "<p>Id of the creator of the game</p>"
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
            "type": "Object",
            "optional": false,
            "field": "nb_players",
            "description": "<p>Nb player of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.min",
            "description": "<p>min player of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "3..50",
            "optional": false,
            "field": "nb_players.max",
            "description": "<p>max player of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "play_time",
            "description": "<p>Play time of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "setup_time",
            "description": "<p>setup time of the game</p>"
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
            "description": "<p>min age of the game</p>"
          },
          {
            "group": "Request body",
            "type": "Number",
            "size": "1..3",
            "optional": false,
            "field": "age.max",
            "description": "<p>max age of the game</p>"
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
            "type": "String",
            "optional": false,
            "field": "editor.id",
            "description": "<p>Id editor of the game</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..30",
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
          "content": "HTTP/1.1 422 Unprocessable Entity\nContent-Type: application/json\n\n{\n\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/users/:idUser/nbrGames",
    "title": "Get a number of game created from a user",
    "name": "getNbrGame",
    "group": "Game",
    "description": "<p>Get number game from a user.</p>",
    "examples": [
      {
        "title": "Example",
        "content": "GET https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/nbrGames HTTP/1.1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "    HTTP/1.1 200 OK\n    Content-Type: application/json\n    Link: &lt;https://archioweb-gameboardapi.herokuapp.com/users/5dc96b5aa875243c200fca6b/nbrGames\n\n\"The users has created: 3 games\"",
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
            "field": "personal_info.email",
            "description": "<p>The email of the user</p>"
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
    "groupTitle": "Game"
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
            "type": "String",
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
            "type": "String",
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
            "field": "personal_info.email",
            "description": "<p>Email of the user</p>"
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
    "type": "post",
    "url": "/login",
    "title": "Login a user",
    "name": "Log_in",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Email credentials of the user trying to login</p>"
          },
          {
            "group": "Request body",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user trying to login</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "token[]",
            "optional": false,
            "field": "jwt",
            "description": "<p>A json web token that must be sent with every request to identify the user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    Content-Type: application/json; charset=utf-8\n\n{\n  \"token\": \"eyJhbGciOiJIUsadwiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1YmM0NWZiNTE4ODA1YTNwqDcxMTQ4NWYiLCJleHAiOjE1NDE0MDcxMTkuMzQ2LCJpYXQiOjE1NDA4MDIzMTkzNDZ9.-x2WD3X6hVU1g-l_7tXIeYPlLOaDAARJPAGPhZlQo6I\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "404",
            "description": "<p>The email of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "401",
            "description": "<p>The password of the User is invalid.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "404:",
          "content": "HTTP/1.1 404 Not Found\nContent-Type: application/json; charset=utf-8\n\n{\n     \"status\": 404,\n     \"message\": \"User Not Found\"\n}",
          "type": "json"
        },
        {
          "title": "401:",
          "content": "HTTP/1.1 401 Unauthorized\nContent-Type: application/json; charset=utf-8\n{\n     \"status\": 401,\n     \"message\": \"invalid password\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/register",
    "title": "Register a user",
    "name": "Register",
    "group": "User",
    "parameter": {
      "fields": {
        "Request body": [
          {
            "group": "Request body",
            "type": "username",
            "size": "3-20",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the new user</p>"
          },
          {
            "group": "Request body",
            "type": "Object",
            "optional": false,
            "field": "personal_info",
            "description": "<p>The personal info of the user</p>"
          },
          {
            "group": "Request body",
            "type": "firstname",
            "size": "3-20",
            "optional": false,
            "field": "personal_info.firstname",
            "description": "<p>The firstname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "lastname",
            "size": "3-20",
            "optional": false,
            "field": "personal_info.lastname",
            "description": "<p>The lastname of the user</p>"
          },
          {
            "group": "Request body",
            "type": "email",
            "optional": false,
            "field": "email",
            "description": "<p>Email of the new user</p>"
          },
          {
            "group": "Request body",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the new user</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>The newly created user</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "201 Created",
          "content": "    HTTP/1.1 201 Created\n    Content-Type: application/json\n    Location: https://archioweb-gameboardapi.herokuapp.com/users/58b2926f5e1def0123e97281\n{\n    \"_id\": \"5dd1489bc6313335a99f65fb\",\n    \"username\": \"Skyggen\",\n    \"personal_info\": {\n        \"firstname\": \"Adrien\",\n        \"lastname\": \"Chapy\",\n        \"email\": \"chapy@gmail.com\",\n        \"password\": \"$2b$10$aQwmXHdxHpWmFHBye48WiOpHHS9HtkTliNVx/dCH1zAWitIrV8YC6\"\n    },\n    \"createdAt\": \"2019-11-17T13:18:19.959Z\",\n    \"updatedAt\": \"2019-11-17T13:18:19.967Z\",\n    \"collections\": [],\n    \"__v\": 0\n}",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "Example",
        "content": "    POST /users HTTP/1.1\n    Content-Type: application/json\n\n{\n\"username\": \"Skyggen\",\n\"personal_info\" :{\n\"firstname\": \"Adrien\",\n\"lastname\": \"Chapy\",\n\"email\": \"chapy@gmail.com\",\n\"password\": \"bob12345\"}\n}",
        "type": "json"
      }
    ],
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "422",
            "description": "<p>Wrong request</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "422:",
          "content": "    HTTP/1.1 422 Unprocessable Entity\n    {\n    \"message\": \"users validation failed: email: Path `email` is required., name: Path `name` is required., password: Path `password` is required.\",\n    \"errors\": {\n        \"email\": {\n            \"message\": \"Path `email` is required.\",\n            \"username\": \"ValidatorError\",\n            \"properties\": {\n                \"message\": \"Path `email` is required.\",\n                \"type\": \"required\",\n                \"path\": \"email\"\n            },\n            \"kind\": \"required\",\n            \"path\": \"email\",\n            \"$isValidatorError\": true\n        },\n        \"name\": {\n            \"message\": \"Path `username` is required.\",\n            \"username\": \"ValidatorError\",\n            \"properties\": {\n                \"message\": \"Path `username` is required.\",\n                \"type\": \"required\",\n                \"path\": \"username\"\n            },\n            \"kind\": \"required\",\n            \"path\": \"username\",\n            \"$isValidatorError\": true\n        },\n        \"password\": {\n            \"message\": \"Path `password` is required.\",\n            \"username\": \"ValidatorError\",\n            \"properties\": {\n                \"message\": \"Path `password` is required.\",\n                \"type\": \"required\",\n                \"path\": \"password\"\n            },\n            \"kind\": \"required\",\n            \"path\": \"password\",\n            \"$isValidatorError\": true\n        }\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Get list of users",
    "name": "RetrieveUsers",
    "group": "User",
    "description": "<p>Retrieves list of users.</p>",
    "success": {
      "examples": [
        {
          "title": "200 OK",
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\nLink: https://archioweb-gameboardapi.herokuapp.com/users\n\n[\n  {\n    \"personal_info\": {\n        \"firstname\": \"Adrien\",\n        \"lastname\": \"Chapy\",\n        \"email\": \"chapy@mail.com\",\n        \"password\": \"dfsghj4\"\n    },\n    \"_id\": \"5dc96e2756de3a3feca9be58\",\n    \"username\": \"dfjhjhd\",\n    \"collections\": [\n        {\n            \"games\": [],\n            \"_id\": \"5dc96e2756de3a3feca9be59\",\n            \"name\": \"Collection\",\n            \"link\": \"url\"\n        }\n    ],\n    \"createdAt\": \"2019-11-11T14:20:23.014Z\",\n    \"updatedAt\": \"2019-11-11T14:20:23.326Z\",\n    \"__v\": 0\n},\n  {\n    \"personal_info\": {\n        \"firstname\": \"Bob\",\n        \"lastname\": \"Robert\",\n        \"email\": \"Robert@gmail.com\",\n        \"password\": \"dfsghj4\"\n    },\n    \"_id\": \"5dc96e39669be23ffb3a4269\",\n    \"username\": \"dfjhjhd\",\n    \"collections\": [\n        {\n            \"games\": [],\n            \"_id\": \"5dc96e39669be23ffb3a426a\",\n            \"name\": \"Collection\",\n            \"link\": \"url\"\n        }\n    ],\n    \"createdAt\": \"2019-11-11T14:20:41.385Z\",\n    \"updatedAt\": \"2019-11-11T14:20:41.391Z\",\n    \"__v\": 0\n}\n]",
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
            "field": "personal_info.email",
            "description": "<p>The email of the user</p>"
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
          "content": "HTTP/1.1 200 OK\nContent-Type: application/json\n\n{\n            {\"_id\":{\"$oid\":\"5da47304fe0c041bc418df11\"},\n            \"username\":\"Skyggen\",\n            \"personal_info\":\n                {\n                    \"firstname\":\"Adrien\",\n                    \"lastname\":\"Ciampone\",\n                    \"email\":\"adrienciampone@gmail.com\",\n                    \"password\":\"bob12345\"\n                },\n            \"collections\":[]",
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
            "field": "personal_info.email",
            "description": "<p>The email of the user</p>"
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
            "type": "String",
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
            "field": "personal_info.email",
            "description": "<p>Email of the user</p>"
          },
          {
            "group": "Request body",
            "type": "String",
            "size": "3..50",
            "optional": false,
            "field": "personal_info.password",
            "description": "<p>Password of the user</p>"
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
        }
      ]
    }
  }
] });
