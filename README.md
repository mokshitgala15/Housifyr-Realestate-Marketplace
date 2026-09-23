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

Copy `.env.example` to `.env` in the project root:

```bash
MONGO=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=3000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

Copy `client/.env.example` to `client/.env`:

```bash
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_API_URL=
```

`VITE_API_URL` is optional:
- Leave it empty in local development to use the existing Vite `/api` proxy.
- Set it to your deployed backend URL (example: `https://your-api.onrender.com/api`) when frontend and backend are deployed as separate services.

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

## Free Deployment Guide (Split Frontend + Backend)

This repository can be prepared for deployment by code changes, but **external deployment cannot be completed by repository code alone**. You must still configure hosting providers and cloud services manually.

### 1) MongoDB Atlas (free tier)

- Create a MongoDB Atlas M0 free cluster.
- Create a database user and get the connection string.
- Configure network access so your backend host can connect.
- Set backend `MONGO` to this Atlas connection string.

### 2) Backend service (Node/Express)

Deploy the repository root as a Node web service:

- Build command: `npm install`
- Start command: `npm start`
- Required env vars:
  - `MONGO`
  - `JWT_SECRET`
  - `NODE_ENV=production`
  - `CLIENT_URL=https://your-frontend-domain`
- Optional env var:
  - `PORT` (platform usually injects this automatically)

Backend now listens on `process.env.PORT || 3000` and binds to `0.0.0.0`.

### 3) Frontend static site (Vite)

Deploy the `client/` directory as a static site:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Required env vars:
  - `VITE_FIREBASE_API_KEY`
- For split deployment also set:
  - `VITE_API_URL=https://your-backend-domain/api`

If `VITE_API_URL` is not set, frontend API calls continue to use `/api` (local proxy-friendly behavior).

### 4) Firebase configuration

Because Google auth and avatar uploads use Firebase:

- Add your deployed frontend domain under Firebase Authentication authorized domains.
- Verify your Firebase project settings and Storage rules for your expected upload behavior.

### 5) Cookie/CORS behavior for split deployment

- Backend enables credentialed CORS for `CLIENT_URL`.
- Auth cookies are HTTP-only and become `Secure + SameSite=None` in production, which is required for cross-site cookie usage over HTTPS.

### 6) Free hosting limitations

- Free backend tiers on common providers may sleep after inactivity, so first requests can be slow.
- Free database/storage tiers have usage limits; monitor quotas in Atlas/Firebase/provider dashboards.
- Frontend/backend URLs can change if you redeploy/recreate services; update `CLIENT_URL` and `VITE_API_URL` accordingly.

## Roadmap

- Property listings with search and filters
- Create, edit, and manage listings
- Favorites or saved properties
- Buyer and seller messaging
- Admin tools
