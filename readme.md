# Action Item Tracker

A full-stack application for managing person profiles with React frontend and NestJS backend.

## Project Overview

This application allows users to:

- Fetch random person profiles from an external API
- View person profiles stored in a PostgreSQL database
- Save random profiles to the database
- View, update, and delete person profiles

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v8 or higher)
- [Docker](https://www.docker.com/products/docker-desktop/)

## PostgreSQL Setup with Docker

1. Run a PostgreSQL container:

```bash
docker run --name postgres-actionitem -e POSTGRES_PASSWORD=postgres -e POSTGRES_DB=actionItemdb -p 5432:5432 -d postgres:15
```

2. Create a `.env` file in the server directory with the following content:

```
RANDOM_USER_URL=https://randomuser.me/api/

DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=actionItemdb
```

## Running the Application with Docker Compose

### Prerequisites

- Docker and Docker Compose installed on your machine
- Git to clone this repository

### Step 1: Set up Environment Files

First, create the necessary environment files:

#### 1. Create `.env` in the root directory:

```
# PostgreSQL volume path (change this to your desired local path)
POSTGRES_VOLUME_PATH=./pgdata
```

#### 2. Create `.env.local` in the `./server` directory:

```
# Database Configuration
DATABASE_HOST=db
DATABASE_PORT=5432
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=actionitem
DATABASE_NAME=actionItemdb

# API Configuration
PORT=3000
API_PREFIX=/api
NODE_ENV=development
```

#### 3. Create `.env.local` in the `./client` directory:

```
# API URL Configuration
SERVER_URL=http://localhost:3000/
```

### Step 2: Create Directories for Volumes

Create a directory for PostgreSQL data:

```bash
mkdir -p pgdata
```

### Step 3: Build and Run with Docker Compose

From the root directory of the project, run:

```bash
# Build and start all services
docker-compose up --build

# Or to run in detached mode
docker-compose up --build -d
```

### Step 4: Access the Application

- Frontend: http://localhost:80
- Backend API: http://localhost:3000/

### Step 5: Stopping the Application

```bash
# To stop the services but keep the containers
docker-compose stop

# To stop and remove the containers
docker-compose down

# To stop, remove containers, and delete volumes (will erase database data)
docker-compose down -v
```

## Troubleshooting

### Database Connection Issues

If the server cannot connect to the database, ensure:

- The database service is running (`docker-compose ps`)
- The environment variables in `server/.env.local` match the database configuration in `docker-compose.yml`
- Try restarting the services: `docker-compose restart`

### Client Cannot Connect to Server

If the client cannot connect to the server:

- Check that both services are running (`docker-compose ps`)
- Verify the `VITE_API_BASE_URL` in `client/.env.local` points to the correct server address
- Check server logs for any CORS issues: `docker-compose logs server`

### Volume Mounting Issues

If you encounter errors with volume mounting:

- Ensure the `POSTGRES_VOLUME_PATH` in the `.env` file points to a valid directory
- Check that the directory has appropriate permissions
- Try using an absolute path instead of a relative one

## Development Workflow

For development, you can:

1. Run individual services:

   ```bash
   docker-compose up client
   docker-compose up server
   docker-compose up db
   ```

2. View logs for a specific service:

   ```bash
   docker-compose logs -f client
   docker-compose logs -f server
   ```

3. Rebuild a specific service after code changes:
   ```bash
   docker-compose build server
   docker-compose up -d server
   ```

## Installation

### Backend (Server)

1. Navigate to the server directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

### Frontend (Client)

1. Navigate to the client directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the client directory with the following content:

```
SERVER_URL=http://localhost:3000/
```

## Running the Application

### Backend

1. Navigate to the server directory:

```bash
cd server
```

2. Start the development server:

```bash
npm run start:dev
```

The server will be running on [http://localhost:3000](http://localhost:3000).

### Frontend

1. Navigate to the client directory:

```bash
cd client
```

2. Start the development server:

```bash
npm run dev
```

The client application will be running on [http://localhost:5173](http://localhost:5173).

## Building for Production

### Backend

1. Navigate to the server directory:

```bash
cd server
```

2. Build the application:

```bash
npm run build
```

3. Run the production build:

```bash
npm run start:prod
```

### Frontend

1. Navigate to the client directory:

```bash
cd client
```

2. Build the application:

```bash
npm run build
```

3. The build output will be in the `dist` directory, which can be served using any static file server.

## API Endpoints

- `GET /`: Returns a random person from the external API
- `GET /randomPersons`: Returns multiple random persons from the external API
- `GET /persons`: Returns all persons from the database
- `GET /person/:id`: Returns a specific person by ID
- `POST /person`: Saves a new person to the database
- `PUT /person/:id`: Updates a specific person
- `DELETE /person/:id`: Deletes a specific person

## Project Structure

- `client/`: React frontend application built with Vite
- `server/`: NestJS backend application
  - `src/entities/`: Database entity definitions
  - `src/dto/`: Data Transfer Objects
  - `src/app.controller.ts`: API endpoints
  - `src/app.service.ts`: Business logic

## Technology Stack

### Frontend

- React 19
- TypeScript
- React Router
- Bootstrap 5
- Vite

### Backend

- NestJS
- TypeORM
- PostgreSQL
- TypeScript

## License

This project is licensed under the MIT License.
