# 📝 Task Manager API

A simple RESTful API for managing tasks using **Node.js**.

## 🚀 Features

- Get all tasks
- Add a new task with validation
- Mark tasks as completed/uncompleted
- Delete tasks

## 🛠️ Technologies

- Express.js
- MongoDB

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nathanaelcheramlak/kurazinternship.git
   cd task-manager-api/backend
   ```
2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Setup environment variables**

   Create a .env file:

   ```
   MONGODB_URI=
   PORT=
   ```

4. **Run the server**
   ```
   pnpm run dev
   ```

## 📬 API Endpoints

### `GET /api/tasks`

Returns all tasks.

### `POST /api/tasks`

Creates a new task.

**Request Body:**

```json
{
	"title": "Do laundry"
}
```

### `PUT /api/tasks/:id`

Updates task completion status.

**Request Body:**

```json
{
	"completed": true
}
```

### `DELETE /api/tasks/:id`

Deletes the specified task.

Made by Nathanael, 2025
