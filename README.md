# EnergyApp Frontend

Frontend of the EnergyApp application — a web application built with **React, TypeScript and Vite**.

The application allows users to view electricity generation data and determine suitable charging periods based on available energy data. The frontend communicates with the EnergyApp REST API developed with ASP.NET Core 8.

## Live Demo

The application is hosted on Microsoft Azure and is available online:

[Open EnergyApp](https://energy-frontend-dcauf6fbhnfrheg8.polandcentral-01.azurewebsites.net/)

## Related Repository

The backend of the application is available in a separate repository:

[EnergyApp Backend on GitHub](https://github.com/maciejbros/EnergyApp_Backend.git)

## Features

* React-based user interface
* TypeScript
* Responsive application layout
* Communication with REST API
* Electricity generation data visualization
* Interactive charts
* Charging period selection
* Charging duration configuration
* Loading and error states
* Client-side form handling
* API configuration through environment variables

## Technology Stack

* React
* TypeScript
* Vite
* React Router
* Axios
* Recharts
* Vitest
* ESLint
* CSS
* Node.js

## Application Architecture

The frontend is structured into separate areas responsible for API communication, pages, layouts and reusable application functionality.

```text id="5prw2h"
EnergyApp Frontend
│
├── src/
│   ├── api/          # API communication
│   ├── assets/       # Static assets
│   ├── components/   # Reusable UI components
│   ├── pages/        # Application pages
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
│
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── index.html
```

The application uses a dedicated API layer for communication with the backend, keeping HTTP requests separated from the UI components.

## Backend Communication

The frontend communicates with the ASP.NET Core backend through REST endpoints.

The API base URL is configured using an environment variable:

```text id="tq6gjx"
VITE_API_BASE_URL
```

This allows the same frontend codebase to be used with different backend environments without modifying the application source code.

Example:

```text id="f1q7xm"
VITE_API_BASE_URL=https://energy-api-gacugmh8bmaeb8hq.polandcentral-01.azurewebsites.net
```

## Data Visualization

The application uses **Recharts** to visualize electricity generation data.

Charts provide users with a graphical representation of available energy generation over time and help identify suitable periods for charging.

## Charging Period

The application allows the user to specify the required charging duration.

The frontend sends the selected duration to the backend, which processes the available energy generation data and returns the calculated charging period.

The result is then presented to the user through the application interface.

## Testing

The project uses **Vitest** for frontend testing.

Tests can be executed using:

```bash id="q9tqeb"
npm test
```

For a single test run:

```bash id="r1w0x7"
npm run test -- --run
```

## Getting Started

### Requirements

* Node.js
* npm
* Git

### 1. Clone the repository

```bash id="8kr8c9"
git clone https://github.com/maciejbros/EnergyApp_Frontend.git
cd EnergyApp_Frontend
```

### 2. Install dependencies

```bash id="x1y5cp"
npm install
```

### 3. Configure the backend URL

Create a `.env` file in the project root:

```text id="z8d4v3"
VITE_API_BASE_URL=http://localhost:5000
```

Replace the URL with the address of the running EnergyApp backend if necessary.

### 4. Run the development server

```bash id="f5x0a1"
npm run dev
```

The application will be available at the local address provided by Vite.

## Production Build

To create a production build:

```bash id="m8x7q2"
npm run build
```

To preview the production build locally:

```bash id="p2r5y6"
npm run preview
```

## Available Scripts

| Command           | Description                   |
| ----------------- | ----------------------------- |
| `npm run dev`     | Starts the development server |
| `npm run build`   | Creates a production build    |
| `npm run preview` | Previews the production build |
| `npm test`        | Runs Vitest tests             |
| `npm run lint`    | Runs ESLint                   |

## Deployment

The frontend is deployed to **Microsoft Azure App Service**.

The production application communicates with the separately deployed ASP.NET Core backend through the configured `VITE_API_BASE_URL` environment variable.

```text
┌─────────────────────────┐
│     React Frontend      │
│       Azure App         │
└────────────┬────────────┘
             │
             │ HTTPS / REST
             ▼
┌─────────────────────────┐
│    ASP.NET Core API     │
│       Azure App         │
└────────────┬────────────┘
             │
             │ HTTP
             ▼
┌─────────────────────────┐
│   External Energy API   │
└─────────────────────────┘
```

The complete application consists of both repositories:

* **EnergyApp Frontend** — React + TypeScript
* **EnergyApp Backend** — C# + ASP.NET Core 8

## Purpose of the Project

The project was developed as a recruitment task and was created to practice:

* React development,
* TypeScript,
* REST API integration,
* asynchronous communication,
* data visualization,
* environment-based configuration,
* frontend testing,
* responsive UI development,
* deploying a web application to Microsoft Azure.

## Author

**Maciej Bros**

[@maciejbros on GitHub](https://github.com/maciejbros)
