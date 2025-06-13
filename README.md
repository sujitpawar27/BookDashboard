# BookDashboard

# Book Dashboard

A modern React-based dashboard for managing a collection of books, featuring CRUD operations, filtering, and a beautiful UI. The project uses a mock REST API powered by [json-server](https://github.com/typicode/json-server) for development and testing.

## Features

- View, add, edit, and delete books
- Search by title or author
- Filter by genre and status
- Pagination support
- Responsive and accessible UI built with Tailwind CSS
- Toast notifications for user feedback
- Data fetching and caching with React Query

## Project Structure

```
book-dashboard/
  ├── public/
  ├── src/
  │   ├── assets/
  │   ├── pages/
  │   │   ├── Add-book.jsx
  │   │   ├── Dashboard.jsx
  │   │   └── Edit-Book.jsx
  │   ├── services/
  │   │   └── api.js
  │   ├── App.jsx
  │   ├── App.css
  │   ├── index.css
  │   └── main.jsx
  ├── package.json
  ├── tailwind.config.js
  ├── postcss.config.js
  ├── vite.config.js
  └── README.md
json-server-mock-api/
  ├── db.json
  ├── routes.json
  ├── package.json
  └── README.md
```

## Getting Started

### 1. Start the Mock API

The backend uses [json-server](https://github.com/typicode/json-server) and is located in the [`json-server-mock-api`](json-server-mock-api/README.md) folder.

```sh
cd json-server-mock-api
npm install
npm run start
```

By default, the API will be available at [http://localhost:3000](http://localhost:3000).

### 2. Start the React App

In a new terminal, run:

```sh
cd book-dashboard
npm install
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as indicated in your terminal).

## Configuration

- The frontend expects the API to run at `http://localhost:3001/` by default. If your json-server runs on a different port, update the `API_URL` in [`src/services/api.js`](src/services/api.js).

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)
- [React Router](https://reactrouter.com/)
- [json-server](https://github.com/typicode/json-server) (mock API)
