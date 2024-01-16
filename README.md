# CodeWords Blogging Website

Welcome to CodeWords - the platform for sharing technical skills, expertise, and success journeys! CodeWords is a blogging website built with React.js and Tailwind CSS for the frontend, and Node.js, Express.js, and MongoDB for the backend. This platform allows users to share their knowledge, insights, and success stories related to various technical skills.

## Features

- **User-friendly Interface**: A clean and intuitive interface designed to provide a seamless blogging experience.

- **Blog Creation**: Users can easily create and publish blogs by sharing their technical knowledge, skills, and success stories.

- **Search Functionality**: The platform includes a search feature that enables users to find specific blogs based on keywords.

- **Responsive Design**: CodeWords is designed to be responsive, ensuring a consistent experience across various devices.

## Technologies Used

- **Frontend**: React.js and Tailwind CSS.
  
- **Backend**: Node.js and Express.js.

- **Database**: MongoDB.

## Getting Started

To run CodeWords locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/CodeWords.git
   ```

2. Navigate to the project directory:

   ```bash
   cd CodeWords
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd client
   npm install
   cd server
   npm install
   ```

4. Set up MongoDB:
   - Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas).
   - Create a cluster and obtain the connection string.
   - Replace the connection string in `MENTION_FOLDER`.

5. Start the application:

   ```bash
   cd ../client
   npm start

   # In a separate terminal
   cd ../server
   node ./index.js
   ```

6. Open your browser and navigate to `http://localhost:3000` to access CodeWords locally.

## Contributing

If you'd like to contribute to CodeWords, feel free to submit pull requests or open issues. We welcome any improvements, bug fixes, or new features!

Happy coding and blogging! 🚀✨
