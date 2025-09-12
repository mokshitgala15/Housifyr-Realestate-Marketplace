# Housifyr - Real Estate Marketplace

## Project Overview

Housifyr is a comprehensive platform for viewing, buying, and selling real estate properties. It serves as a marketplace where users can explore property listings, connect with sellers, and facilitate real estate transactions smoothly and securely.

## Features

- Browse property listings with advanced filters (location, price, property type, etc.)
- User authentication and authorization
- Add, edit, and manage property listings
- Secure messaging between buyers and sellers
- Favorites and saved properties
- Responsive design for desktop and mobile devices
- Robust search functionality
- Admin dashboard for managing users and listings

## Technologies Used

- React.js 
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- RESTful API architecture
- Redux Toolkit for state management
- Material-UI / Styled Components / Tailwind CSS
- Git & GitHub for version control
- AWS S3 for image uploads

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mokshitgala15/Housifyr.git
   cd Housifyr
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   - Create a `.env` file in the `server` directory with necessary configuration (MongoDB URI, JWT secret, etc.)

5. **Run the development servers**
   ```bash
   # In one terminal
   cd server
   npm start

   # In another terminal
   cd client
   npm start
   ```

## Usage

- Register or log in to your account
- Browse or search for real estate properties
- Add your own property listings for sale
- Contact sellers through the platform
- Save favorite listings for later

## Contribution Guidelines

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request describing your changes
