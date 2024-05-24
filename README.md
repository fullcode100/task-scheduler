# Distributed Task Scheduler

This project is a distributed task scheduler where clients can register tasks to be executed at a specific time or on a recurring schedule. The scheduler ensures tasks are picked up and executed within 10 seconds of their scheduled time.

## Features

- One-time tasks: Scheduled to be executed once at a specific time.
- Recurring tasks: Scheduled using cron syntax to be executed repeatedly.
- Task management via a React frontend.
- Task execution logging.

## Technologies Used

- Backend: Node.js, Express, Mongoose, TypeScript
- Frontend: React, TypeScript
- Database: MongoDB
- Containerization: Docker
- Orchestration: Kubernetes

## Prerequisites

- Docker
- Kubernetes
- Node.js
- npm or yarn

## Setup

### Backend

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the TypeScript code:

   ```bash
   npm run build
   ```

4. Build the Docker image:
   ```bash
   docker build -t backend:latest .
   ```

### Frontend

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Build the Docker image:
   ```bash
   docker build -t frontend:latest .
   ```

## Deployment

### Using Docker Compose

1. Navigate to the root directory:

   ```bash
   cd ..
   ```

2. Start the services:
   ```bash
   docker-compose up
   ```

### Using Kubernetes

1. Apply the Kubernetes configurations:
   ```bash
   kubectl apply -f k8s/mongo-pvc.yaml
   kubectl apply -f k8s/mongo-deployment.yaml
   kubectl apply -f k8s/mongo-service.yaml
   kubectl apply -f k8s/backend-deployment.yaml
   kubectl apply -f k8s/backend-service.yaml
   kubectl apply -f k8s/frontend-deployment.yaml
   kubectl apply -f k8s/frontend-service.yaml
   ```

## API Endpoints

### Create Task

- **URL:** `/api/tasks`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "name": "Task Name",
    "cronExpression": "0 * * * *",
    "executeAt": "2024-05-24T15:30:00Z",
    "recurring": true
  }
  ```

### Get Tasks

- **URL:** `/api/tasks`
- **Method:** `GET`

### Delete Task

- **URL:** `/api/tasks/:id`
- **Method:** `DELETE`

### Update Task

- **URL:** `/api/tasks/:id`
- **Method:** `PUT`
- **Body:**
  ```json
  {
    "name": "Updated Task Name",
    "cronExpression": "0 * * * *",
    "executeAt": "2024-05-24T15:30:00Z",
    "recurring": true
  }
  ```

## Frontend

The frontend application allows users to create, view, and delete tasks. It consists of the following components:

- `TaskForm`: Form to create new tasks.
- `TaskList`: Displays the list of scheduled tasks.
