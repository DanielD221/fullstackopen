# Full Stack Open

My exercises and small applications from the University of Helsinki's [Full Stack Open](https://fullstackopen.com/en/) course.

The repository follows the progression from browser/server communication and React fundamentals to Express APIs, MongoDB persistence, authentication, and backend testing. Each application has its own dependencies and scripts; there is no root-level application or install command.

## Contents

| Part | Directory | What it contains |
| --- | --- | --- |
| 0 | `part0/` | Mermaid sequence diagrams for browser/server interactions |
| 1 | `part1/course_information/` | React components for course information |
| 1 | `part1/unicafe/` | Feedback collection and statistics |
| 1 | `part1/anecdotes/` | Random programming anecdotes and voting |
| 2 | `part2/course_information/` | Course lists and exercise totals |
| 2 | `part2/the_phonebook/` | Contact filtering, creation, updates, deletion, and notifications |
| 3 | `part3/phonebook_backend/` | Express/MongoDB phonebook API |
| 4 | `part4/blog_list/backend/` | Blog API, users, password hashing, JWT login, and tests |
| 5 | `part5/blog_list/bloglist-frontend/` | React blog interface with login, likes, and blog management |

## Requirements

Use Node.js 24 and npm. Backend applications also require MongoDB, either locally or through MongoDB Atlas. Install dependencies inside each application directory.

## Run a React exercise

For example:

```sh
cd part1/anecdotes
npm ci
npm run dev
```

Open the URL printed by Vite. The React applications also provide `npm run build`, `npm run preview`, and `npm run lint`.

## Run the phonebook

Install the frontend dependencies in `part2/the_phonebook` and backend dependencies in `part3/phonebook_backend` with `npm ci`.

Create `part3/phonebook_backend/.env`:

```dotenv
MONGODB_URI=mongodb://127.0.0.1:27017/phonebook
PORT=3001
```

Start the backend with `npm run dev` in its directory, then the frontend with `npm run dev` in its directory. The frontend proxies `/api` requests to `http://localhost:3001`.

The phonebook's `server` script starts a separate JSON Server exercise, but the current frontend service uses `/api/persons` and is configured for the Express backend.

## Run the blog application

Install dependencies separately in:

- `part4/blog_list/backend`
- `part5/blog_list/bloglist-frontend`

Create `part4/blog_list/backend/.env`:

```dotenv
PORT=3003
MONGODB_URI=mongodb://127.0.0.1:27017/blog_list
TEST_MONGODB_URI=mongodb://127.0.0.1:27017/blog_list_test
SECRET=replace-with-a-long-random-local-secret
```

Run `npm run dev` in the backend directory and `npm run dev` in the frontend directory. The frontend proxies API requests to port `3003`.

Create a user through `POST /api/users` with `username`, `name`, and `password`, then log in through the interface. The backend exposes `/api/blogs`, `/api/users`, and `/api/login`.

## Checks and tests

Run `npm run lint` in applications that define it. In `part4/blog_list/backend`:

```sh
npm test
```

This uses Node's test runner and Supertest. Use a dedicated `TEST_MONGODB_URI`: the API tests clear and repopulate blog and user collections.

The current tests still need updates: `api.test.js` uses `describe` without importing it and some creation tests do not supply the JWT now required by the API. The phonebook backend's test script is a placeholder. Passing all tests is not implied by the presence of the suites.

## Related repositories

- [phonebook_backend](https://github.com/DanielD221/phonebook_backend) — standalone phonebook deployment repository.
- [blog_list](https://github.com/DanielD221/blog_list) — earlier standalone blog backend without the later authentication features.
- [fullstackopen-containers](https://github.com/DanielD221/fullstackopen-containers) — separate containers coursework.

These are learning exercises at different stages, rather than production-ready applications.
