# 🌍 Capital Quiz

Welcome to the **Capital Quiz**! This app allows users to test their knowledge of world capitals. It's a fun and educational way to learn about the capitals of different countries.

➡️: [https://capital-quiz-game-frontend.onrender.com/](https://capital-quiz-game.onrender.com/)

## Features

- 📝 **Test your knowledge**: Answer questions about the capitals of different countries.
- ⚛️ **Frontend**: Built with React, providing a smooth and interactive user experience.
- 🖥️ **Backend**: Powered by Node.js and Express.js, ensuring fast and reliable server-side operations.
- 🗄️ **Database**: Utilizes PostgreSQL for storing quiz questions and user data.
- ☁️ **Cloud Hosting**: 
  - **Frontend & Backend** hosted on **Render**.
  - **Database** hosted on **Neon** for reliable access and performance.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node package manager) or yarn

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/Capital-Quiz-Game.git
    cd capital-quiz
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies**:
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up the database**:
    - Create a PostgreSQL database on **Neon**.
    - Use Neon to create and manage your tables.
    - Update the database configuration in the backend config file (e.g., `backend/config/database.js`).

5. **Run the backend server**:
    ```bash
    cd backend
    node server.js (or nodemon)
    ```

6. **Run the frontend server**:
    ```bash
    cd ../frontend
    npm start
    ```

The app should now be running on `http://localhost:3000` for the frontend and `http://localhost:5000` for the backend.

## Usage

- Open your browser and navigate to `http://localhost:3000`.
- Start the quiz and test your knowledge of world capitals!
- Enjoy learning!

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request.

Happy quizzing! 🎉
