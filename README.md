# Vue.js CRUD Product App

This project is a Vue.js application to manage products, allowing users to view, add, and delete products. The app communicates with a backend using Vuex for state management and Axios for API requests.

## Technologies Used

- **Vue 3**: The app is built using Vue 3, leveraging the Composition API with the new syntax (`setup()`, `ref`, `reactive`, `computed`, etc.).
- **Vuex 4**: Used for state management, allowing the app to manage the global state of products and perform CRUD operations.
- **Axios**: Used for making HTTP requests to the backend (`json-server` or a similar REST API).
- **Bootstrap 5**: Used for UI styling to quickly build a responsive design for the app.
- **Vite**: The project uses Vite for fast development builds and optimized production builds.

## Project Setup

To get started, clone this repository and install the necessary dependencies:

### 1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/vue-product-crud.git
   cd vue-product-crud
   ```
---
### 2.Install Dependencies:
```bash
npm install
```
---
### 3.Start JSON Server:
json-server is used to simulate a backend API with a db.json file. To start the server, run the following command:
```bash
npm run server
```
---
### 4.Run the Application:
Start the development server:
```bash
npm run dev
```
The app will be available at **`http://localhost:3000.`**

---
Key Features
CRUD Operations:
Create: Add new products through a form.
Read: View a list of all products or individual product details.
Update: Update product information (future enhancement).
Delete: Delete a product from the list.
