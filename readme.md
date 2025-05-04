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
- `PUT /updatePerson/:id`: Updates a specific person
- `DELETE /deletePerson/:id`: Deletes a specific person

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
