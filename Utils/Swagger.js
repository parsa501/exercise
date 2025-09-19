import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Workout Tracker API",
      version: "1.0.0",
      description: "API documentation for the Workout Tracker application. Users can sign up, log in, create workout plans, manage exercises and categories, and track their progress."
    },
    servers: [
      {
        url: "http://localhost:5000"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      },
      schemas: {
        User: {
          type: "object",
          properties: {
            _id: { type: "string", example: "64f91e2a5c0a1e1234567890" },
            username: { type: "string", example: "john_doe" },
            role: { type: "string", example: "user" },
            createdAt: { type: "string", example: "2025-09-17T12:34:56.789Z" },
            updatedAt: { type: "string", example: "2025-09-17T12:34:56.789Z" }
          }
        },
        Category: {
          type: "object",
          properties: {
            _id: { type: "string", example: "64f91e2a5c0a1e1234567890" },
            title: { type: "string", example: "Cardio" },
            description: { type: "string", example: "Exercises for cardio workouts" },
            createdAt: { type: "string", example: "2025-09-17T12:34:56.789Z" },
            updatedAt: { type: "string", example: "2025-09-17T12:34:56.789Z" }
          }
        },
        Exercise: {
          type: "object",
          properties: {
            _id: { type: "string", example: "64f91e2a5c0a1e1234567890" },
            title: { type: "string", example: "Push Up" },
            description: { type: "string", example: "Chest exercise" },
            categoryId: { type: "string", example: "64f91e2a5c0a1e1234567890" },
            muscleGroup: { type: "string", example: "Chest" },
            createdAt: { type: "string", example: "2025-09-17T12:34:56.789Z" },
            updatedAt: { type: "string", example: "2025-09-17T12:34:56.789Z" }
          }
        },
        Workout: {
          type: "object",
          properties: {
            _id: { type: "string", example: "64f91e2a5c0a1e1234567890" },
            userId: { type: "string", example: "64f91e2a5c0a1e1234567890" },
            title: { type: "string", example: "Morning Workout" },
            date: { type: "string", example: "2025-09-17T07:00:00.000Z" },
            status: { type: "string", example: "pending" },
            exercises: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  exerciseId: { type: "string", example: "64f91e2a5c0a1e1234567890" },
                  sets: { type: "integer", example: 3 },
                  reps: { type: "integer", example: 12 },
                  weight: { type: "number", example: 20 },
                  notes: { type: "string", example: "Felt good" }
                }
              }
            },
            createdAt: { type: "string", example: "2025-09-17T12:34:56.789Z" },
            updatedAt: { type: "string", example: "2025-09-17T12:34:56.789Z" }
          }
        }
      }
    }
  },
  apis: ["./Routes/*.js"]
};

const swaggerDocs = swaggerJSDoc(options);

export default swaggerDocs;
