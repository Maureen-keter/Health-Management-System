# Health-Management-System

# Health-Management-System - Frontend

This is the frontend for the **Client Program Manager** web application. It allows you to manage clients, enroll them into programs, and view detailed client profiles. The app is built using React and communicates with a backend API to manage and retrieve client data and program details.

## Features

- **Client List**: View a list of all clients, search by email, and click on a client to view their profile.
- **Client Profile**: Displays a client’s details, including their enrolled programs.
- **Enroll Clients**: Enroll a client into programs via the **Enrollment Form**.
- **Manage Programs**: View and edit health programs available for enrollment.

## Technologies Used

- React
- React Router for routing
- Fetch API for HTTP requests
- CSS for styling

## 📦 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/health-management-api.git
cd health-management-system/frontend
```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the development server**:
    ```bash
    npm run dev
    ```

    Your app should now be running on [http://localhost:5173](http://localhost:5173).


## Components Overview

- **Navbar**: A top navigation bar that includes links to different pages such as Clients, Add Client, Programs, etc.
- **ClientList**: Displays a list of all clients with a search input to filter by email. When a client is clicked, it shows the client's profile.
- **ClientProfile**: Displays detailed information about a client, including their enrolled programs.
- **ClientForm**: A form for adding a new client to the system.
- **EnrollmentForm**: A form to enroll a client into a program.
- **ProgramPage**: Displays a list of available programs that clients can enroll in.

## Routing

The app uses `react-router-dom` for navigation. The following routes are defined:

- `/`: Home page with.
- `/clients`: Displays a list of all clients.
- `/add-client`: Form to add a new client.
- `/programs`: Displays all available programs.
- `/enroll`: Form to enroll a client into a program.
- `/client-id`: Display a profile.




```javascript
export const BASE_URL = `https://health-management-system-ghta.onrender.com`; 


# 🏥 Health Management System - Backend

This is the backend API for a Health Management System built using **Flask-RESTful**. It allows users to create health programs (e.g., TB, Malaria, HIV), register clients, enroll them into one or more programs, search for clients, view profiles, and expose client data via an API for external integrations.



## 🚀 Features

- Create and manage health programs
- Register new clients into the system
- Enroll clients in one or more health programs
- Search and filter through registered clients
- View client profiles with enrolled program details
- Expose client profile data via a REST API endpoint

---

## 🧰 Tech Stack

- Python 3.x
- Flask
- Flask-RESTful
- Flask-SQLAlchemy
- SQLite (development database)
- Deployed on Render
- Environment managed using **Pipenv**

---

## 🌐 Live Deployment

> 🔗 **Live URL**:  
> `https://health-management-system-ghta.onrender.com`

---

### 2. Set Up the Environment Using Pipenv
```bash
pipenv install
pipenv shell
```

### 3. Run the Flask App
```bash
flask run
```

The server will be available at:  
`http://127.0.0.1:5000/`

---

## 📚 API Endpoints

| Method | Endpoint              | Description                             |
|--------|------------------------|-----------------------------------------|
| POST   | `/programs`            | Create a new health program             |
| POST   | `/clients`             | Register a new client                   |
| POST   | `/enrollments`         | Enroll a client into a health program   |
| GET    | `/clients`             | Retrieve or search clients              |
| GET    | `/clients/<id>`        | View a client's profile                 |

---

## 🔧 Project Structure

```
📁 backend/
│
├── app.py              # Main application file
├── models.py           # SQLAlchemy models
├── controllers/        # Flask-RESTful resource classes
├── database.db         # SQLite DB (auto-generated)
├── Pipfile             # Pipenv dependencies
└── README.md
```

---

## 📌 ✨ Future Enhancements

-  Create Login and Sign up pages
-  Implement authentication and password protection
-  Add API rate limiting

---

## 🧑‍💻 Author

**Maureen Chelangat**  


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
