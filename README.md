# Bike Weather Predictor

## Overview

Bike Weather Predictor is a fullstack web application that helps users decide whether it's suitable to bike based on weather forecasts. Built with a Flask backend and a React (Vite) frontend, the app allows users to configure thresholds like temperature, wind, and precipitation, and provides 3-day predictions for their selected city.

## Features

- Custom Weather Settings: Users can set thresholds for minimum and maximum temperature, wind speed, rain chance, and snow chance.
- 3-Day Forecast: The app fetches real-time weather data from OpenWeather and analyzes biking conditions for the next 3 days.
- Live Weather View: A separate weather section allows users to check general forecasts without prediction logic.
- Smart UI: Users receive instant feedback after submitting their preferences.

## Quick Start

### Prerequisites

- Python 3.12+
- Git
- Node.js and npm
- Virtual environment tool (`venv` or `virtualenv`) recommended

## Installation and Setup

### 1. Clone the Repository

git clone https://github.com/yourusername/bike-weather-app.git cd bike-weather-app

### 2. Backend Setup

cd backend python -m venv venv venv\Scripts\activate # On Windows source venv/bin/activate # On macOS/Linux

pip install -r requirements.txt

### 3. Frontend Setup

cd ../frontend npm install

## Running the Application

In the `/frontend` directory, run:

npm run start

This command will:

- Start the Flask backend on http://localhost:5000
- Start the React frontend on http://localhost:5173

Open your browser to http://localhost:5173 to use the application.

## Folder Structure

project-root/ ├── backend/ # Flask backend │ ├── main.py │ ├── config.py │ └── bike.db ├── frontend/ # React + Vite frontend │ ├── index.html │ ├── vite.config.js │ └── src/ │ ├── App.jsx │ ├── components/ │ └── pages/

## API Endpoints

### Backend (Flask)

| Method | Route                     | Description                            |
|--------|---------------------------|----------------------------------------|
| POST   | /api/weather              | Save custom weather settings           |
| GET    | /api/predict/<cookieid>   | Get 3-day prediction based on settings |
| GET    | /api/get_settings/<id>    | Retrieve saved settings by ID          |

## Frontend (React + Vite)

- Built with React and Vite
- Uses Axios for API requests
- Proxy is configured in `vite.config.js` to redirect `/api` requests to the Flask backend

## References

- OpenWeather API: https://openweathermap.org/api
- Flask Documentation: https://flask.palletsprojects.com/
- Vite: https://vitejs.dev/
- React Documentation: https://reactjs.org/

## AI Assistance

- ChatGPT
- GitHub Copilot

## Version History

- Initial version: July 23, 2023
- Latest updated version: April 2025

## Developer

Developer: Bünyamin E. Bölükbaşı  
Student ID: 1058754  
Location: Utrecht, Netherlands