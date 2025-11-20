export const openApiSchema = {
  "openapi": "3.1.0",
  "info": {
    "title": "Quiz Service API",
    "description": "API for creating and managing quizzes and results. This API is designed to work with ChatGPT Custom GPT Actions.",
    "version": "v1.0.0"
  },
  "servers": [
    {
      "url": `${process.env.API_HOST || 'http://localhost:3000'}`
    }
  ],
  "paths": {
    "/api/quiz": {
      "post": {
        "summary": "Create a new quiz",
        "description": "Create a new quiz with questions and answers. Returns a shareable URL.",
        "operationId": "createQuiz",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/QuizInput"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Quiz created successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "url": {
                      "type": "string",
                      "description": "Shareable URL for the quiz",
                      "example": `${process.env.WEB_HOST || 'http://localhost:3000'}/quiz?abc-123-def`
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Bad request - Invalid input",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized - Missing or invalid JWT token"
          }
        }
      },
      "get": {
        "summary": "Get a quiz by UUID",
        "description": "Retrieve quiz details by its unique UUID. No authentication required.",
        "operationId": "getQuiz",
        "parameters": [
          {
            "name": "uuid",
            "in": "query",
            "description": "The UUID of the quiz to retrieve",
            "required": true,
            "schema": {
              "type": "string",
              "example": "abc-123-def-456"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Quiz retrieved successfully",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Quiz"
                }
              }
            }
          },
          "404": {
            "description": "Quiz not found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Error"
                }
              }
            }
          }
        }
      },
      "put": {
        "summary": "Update a quiz",
        "description": "Update an existing quiz by UUID. Requires authentication.",
        "operationId": "updateQuiz",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "name": "uuid",
            "in": "query",
            "description": "The UUID of the quiz to update",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/QuizInput"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Quiz updated successfully",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Quiz"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Quiz not found"
          }
        }
      },
      "delete": {
        "summary": "Delete a quiz",
        "description": "Delete a quiz by UUID. Requires authentication.",
        "operationId": "deleteQuiz",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "name": "uuid",
            "in": "query",
            "description": "The UUID of the quiz to delete",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Quiz deleted successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Quiz deleted successfully"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Quiz not found"
          }
        }
      }
    },
    "/api/gpt/quiz": {
      "post": {
        "summary": "Create quiz via GPT Action",
        "description": "Create a new quiz using Bearer token authentication (for ChatGPT GPT Actions)",
        "operationId": "createQuizViaGPT",
        "security": [
          {
            "BearerToken": []
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/QuizInput"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Quiz created successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "url": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized - Invalid bearer token"
          }
        }
      }
    },
    "/api/result": {
      "post": {
        "summary": "Submit quiz result",
        "description": "Submit answers and get score for a quiz",
        "operationId": "createResult",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ResultInput"
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Result created successfully",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Result"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          }
        }
      }
    },
    "/api/result/{id}": {
      "get": {
        "summary": "Get quiz result",
        "description": "Retrieve a specific quiz result by ID",
        "operationId": "getResult",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Result ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Result retrieved successfully",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Result"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Result not found"
          }
        }
      },
      "put": {
        "summary": "Update quiz result",
        "description": "Update an existing quiz result",
        "operationId": "updateResult",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Result ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/ResultInput"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Result updated successfully",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Result"
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Result not found"
          }
        }
      },
      "delete": {
        "summary": "Delete quiz result",
        "description": "Delete a quiz result by ID",
        "operationId": "deleteResult",
        "security": [
          {
            "bearerAuth": []
          }
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "Result ID",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Result deleted successfully",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Result deleted successfully"
                    }
                  }
                }
              }
            }
          },
          "401": {
            "description": "Unauthorized"
          },
          "404": {
            "description": "Result not found"
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "QuizInput": {
        "type": "object",
        "required": ["content", "answers", "correctAnswer", "score", "duration"],
        "properties": {
          "content": {
            "type": "string",
            "description": "The quiz question",
            "example": "What is the capital of France?"
          },
          "answers": {
            "type": "array",
            "description": "List of possible answers",
            "items": {
              "type": "string"
            },
            "example": ["Paris", "London", "Berlin", "Madrid"]
          },
          "correctAnswer": {
            "type": "integer",
            "description": "Index of the correct answer (0-based)",
            "example": 0
          },
          "score": {
            "type": "integer",
            "description": "Points awarded for correct answer",
            "example": 10
          },
          "duration": {
            "type": "integer",
            "description": "Time limit in seconds",
            "example": 30
          }
        }
      },
      "Quiz": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "description": "MongoDB ObjectId"
          },
          "content": {
            "type": "string",
            "description": "The quiz question"
          },
          "answers": {
            "type": "array",
            "description": "List of possible answers",
            "items": {
              "type": "string"
            }
          },
          "correctAnswer": {
            "type": "integer",
            "description": "Index of the correct answer"
          },
          "score": {
            "type": "integer",
            "description": "Points for correct answer"
          },
          "duration": {
            "type": "integer",
            "description": "Time limit in seconds"
          },
          "uuid": {
            "type": "string",
            "description": "Unique identifier for sharing"
          }
        }
      },
      "ResultInput": {
        "type": "object",
        "required": ["quizId", "answers", "score", "timeTaken"],
        "properties": {
          "quizId": {
            "type": "string",
            "description": "ID of the quiz",
            "example": "507f1f77bcf86cd799439011"
          },
          "answers": {
            "type": "array",
            "description": "User's answers",
            "items": {
              "oneOf": [
                { "type": "string" },
                { "type": "integer" }
              ]
            },
            "example": [0, "Paris", 2]
          },
          "score": {
            "type": "integer",
            "description": "Score achieved",
            "example": 10
          },
          "timeTaken": {
            "type": "integer",
            "description": "Time taken in seconds",
            "example": 25
          }
        }
      },
      "Result": {
        "type": "object",
        "properties": {
          "_id": {
            "type": "string",
            "description": "MongoDB ObjectId"
          },
          "quizId": {
            "type": "string",
            "description": "Reference to Quiz"
          },
          "answers": {
            "type": "array",
            "description": "Submitted answers",
            "items": {
              "oneOf": [
                { "type": "string" },
                { "type": "integer" }
              ]
            }
          },
          "score": {
            "type": "integer",
            "description": "Score achieved"
          },
          "timeTaken": {
            "type": "integer",
            "description": "Time taken in seconds"
          }
        }
      },
      "Error": {
        "type": "object",
        "properties": {
          "error": {
            "type": "string",
            "description": "Error message"
          }
        }
      }
    },
    "securitySchemes": {
      "BearerToken": {
        "type": "http",
        "scheme": "bearer",
        "description": "Bearer token for GPT Actions (OAuth2 flow)"
      }
    }
  }
};
