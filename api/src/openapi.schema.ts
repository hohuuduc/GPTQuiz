export const openApiSchema = {
  "openapi": "3.1.0",
  "info": {
    "title": "Quiz Service API",
    "description": "API for creating and managing quizzes and results.",
    "version": "v1.0.0"
  },
  "servers": [
    {
      "url": `http://${process.env.HOST}`
    }
  ],
  "paths": {
    "/api/quiz": {
      "post": {
        "description": "Create a new quiz.",
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
            "description": "Quiz created successfully.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "url": {
                      "type": "string",
                      "example": `${process.env.HOST}/quiz?{UUID}`
                    }
                  }
                }
              }
            }
          }
        }
      },
      "get": {
        "description": "Get a quiz by its UUID.",
        "operationId": "getQuiz",
        "parameters": [
          {
            "name": "uuid",
            "in": "query",
            "description": "The UUID of the quiz to retrieve.",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation.",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Quiz"
                }
              }
            }
          }
        }
      }
    }
  },
  "components": {
    "schemas": {
      "QuizInput": {
        "type": "object",
        "properties": {
          "content": { "type": "string" },
          "answers": { "type": "array", "items": { "type": "string" } },
          "correctAnswer": { "type": "integer" },
          "score": { "type": "integer" },
          "duration": { "type": "integer" }
        },
        "required": ["content", "answers", "correctAnswer", "score", "duration"]
      },
      "Quiz": {
        "type": "object",
        "properties": {
          "_id": { "type": "string" },
          "content": { "type": "string" },
          "answers": { "type": "array", "items": { "type": "string" } },
          "correctAnswer": { "type": "integer" },
          "score": { "type": "integer" },
          "duration": { "type": "integer" },
          "uuid": { "type": "string" }
        }
      }
    },
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  }
};
