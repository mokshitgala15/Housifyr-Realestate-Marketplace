# Housifyr

Housifyr is a MERN real estate app in progress. The current implementation includes user authentication, Google sign-in, protected profile access, profile updates, avatar uploads through Firebase Storage, account deletion, and sign out.

## Tech Stack

- React + Vite
- Redux Toolkit + Redux Persist
- Tailwind CSS
- Node.js + Express
- MongoDB + Mongoose
- JWT auth with HTTP-only cookies
- Firebase Auth and Storage

## Project Structure

- `api/` - Express API, MongoDB models, routes, controllers, and auth middleware
- `client/` - Vite React frontend

## Environment Variables

Create a `.env` file in the project root:

```bash
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Create a `.env` file in `client/`:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
```

## Installation

Install backend dependencies from the project root:

```bash
npm install
```

Install frontend dependencies:

```bash
cd client
npm install
```

## Development

Start the API from the project root:

```bash
npm run dev
```

Start the frontend from `client/`:

```bash
npm run dev
```

The Vite dev server proxies `/api` requests to `http://localhost:3000`.

## Available Checks

From `client/`:

```bash
npm run lint
npm run build
```

## Roadmap

- Property listings with search and filters
- Create, edit, and manage listings
- Favorites or saved properties
- Buyer and seller messaging
- Admin tools
