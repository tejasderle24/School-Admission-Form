# School Admission Form Application

A simple web application for handling school admission form submissions. Built with Node.js and Express.

## Features

- Web form for collecting student admission information
- Stores submissions in CSV format
- Simple and intuitive user interface
- Environment variable configuration

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following content:
   ```
   PORT=8000
   ```

## Usage

1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:8000`
3. Fill out the admission form and submit

## Project Structure

- `src/` - Main application code
  - `index.js` - Server setup and routes
  - `views/` - HTML templates
  - `public/` - Static assets
  - `data/` - CSV storage directory

## Data Storage

Admission form submissions are stored in `data/admissions.csv` with the following columns:
- Student Name
- Date of Birth
- Grade
- Parent/Guardian Name
- Email
- Phone
- Additional Information

## Environment Variables

- `PORT` - Server port number (default: 8000)

## License

MIT
