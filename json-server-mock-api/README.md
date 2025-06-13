# json-server-mock-api

This project sets up a mock API using Json Server, allowing you to quickly create a RESTful API for testing and development purposes.

## Project Structure

- **db.json**: Contains the mock data for the API. This file defines the structure and initial data for the resources that the Json Server will serve.
- **routes.json**: Defines custom routes for the Json Server. It allows you to specify how the API endpoints should behave and map them to the data in `db.json`.
- **package.json**: Configuration file for npm, listing the dependencies and scripts for starting the server.

## Getting Started

To set up and run the mock API, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd json-server-mock-api
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the mock API**:
   ```
   npm run start
   ```

   This command will start the Json Server, and you can access the API at `http://localhost:3000`.

## Customization

- You can modify the `db.json` file to change the mock data.
- Update the `routes.json` file to customize the API endpoints as needed.

## License

This project is licensed under the MIT License.