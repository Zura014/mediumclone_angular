# Medium Clone Application

## Overview
This is a **Medium Clone** built using **Angular** with **NgRx** for state management and a **Docker-containerized backend**.

## Tech Stack
### Frontend:
- Angular
- NgRx (for state management)
- Bootstrap (for UI components)
- RxJS (for reactive programming)
- TypeScript

### Backend:
- JWT Authentication
- RESTful API
- Docker (containerized backend)

## Features
- User Authentication (Sign-up, Login, JWT-based auth)
- Create, Edit, and Delete Articles
- Like and Comment on Articles
- Follow/Unfollow Users
- Profile Management
- Bookmark Articles
- Responsive UI

## API Endpoints
- `POST /api/auth/register` - User Registration
- `POST /api/auth/login` - User Login
- `GET /api/articles` - Fetch All Articles
- `POST /api/articles` - Create an Article
- `GET /api/articles/:id` - Get a Single Article
- `PUT /api/articles/:id` - Update an Article
- `DELETE /api/articles/:id` - Delete an Article
- `POST /api/articles/:id/like` - Like an Article
- `POST /api/articles/:id/comment` - Comment on an Article
- `POST /api/users/:id/follow` - Follow a User

## License
This project is open-source under the **MIT License**.

