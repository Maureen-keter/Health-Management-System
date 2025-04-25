# Health-Management-System


Perfect! Here's your updated `README.md` with the correct environment setup using `pipenv`, and confirmation that you're using `flask-restful`.

---

```markdown
# 🏥 Health Management System API

This is the backend API for a Health Management System built using **Flask-RESTful**. It allows users to create health programs (e.g., TB, Malaria, HIV), register clients, enroll them into one or more programs, search for clients, view profiles, and expose client data via an API for external integrations.

The project is deployed on [Render](https://render.com/) for public access and integration.

---

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

## 📦 Getting Started Locally

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/health-management-api.git
cd health-management-api
```

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

-  Add API rate limiting

---

## 🧑‍💻 Author

**Maureen Chelangat**  


---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
