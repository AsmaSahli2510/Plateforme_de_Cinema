# Plateforme_de_Cinema

A cinema event platform built with React (Vite), Node.js/Express, and MongoDB.

---

## Development (hot-reload – no rebuild needed)

Use the dedicated development Compose file so every file you save is reflected **instantly** in the running container — no need to run `docker compose build` again.

```bash
# First time (or after changing dependencies):
docker compose -f docker-compose.dev.yml up --build

# Subsequent runs – changes are picked up automatically:
docker compose -f docker-compose.dev.yml up
```

| Service  | URL                       | Notes                           |
|----------|---------------------------|---------------------------------|
| Frontend | http://localhost:5173     | Vite dev server with HMR        |
| Backend  | http://localhost:5000     | Express + nodemon auto-restart  |
| MongoDB  | mongodb://localhost:27017 | Persistent data volume          |

The dev setup works by:
- **Backend** – source code is mounted into the container; `nodemon` watches for `.js` file changes and restarts the server automatically.
- **Frontend** – source code is mounted into the container; Vite's Hot Module Replacement (HMR) pushes UI changes to your browser instantly without a page refresh.

---

## Production

```bash
docker compose up --build
```

The production stack builds a static React bundle and serves it through Nginx on port `80`.
