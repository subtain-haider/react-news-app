# React News App

This is a React-based news application that allows users to search for articles and filter results by date, category, and source. The frontend is built using React, and it connects to a backend API built with Laravel.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone the repository:
    git clone https://github.com/subtain-haider/react-news-app

2. Navigate to the project directory:
    cd react-news-app

3. Build the Docker containers using the `docker-compose.yml` file provided in the root directory of your project:
    docker-compose build

4. Start the Docker containers:
    docker-compose up -d

The frontend application will be available at `http://localhost:3000`.

## Notes

Make sure that the backend Laravel API is running and accessible for the frontend application to fetch data. Update the API URL in the React application's `.env` file if necessary.
