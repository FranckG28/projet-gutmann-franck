# Instagras

Instagras is a social burgers network where you can share and taste burgers with the world.

## Development installation

### Frontend

> node.js v18+ required

**1. Install dependencies**

```
pnpm i
```

**2. Fill the .env**

**3. Run the server**

```
pnpm dev
```

### Backend

> node.js v20+ required

**1. Install dependencies**

```
pnpm i
```

**2. Fill the .env.**

The app it configured to use a PostgreSQL database, so you should provide connexion info to a PostgreSQL database.
A free Postgres database on [Render](https://render.com) can do the work, but lasts only 90 days.

**3. Run migrations to setup the db**

```
node ace migration:run
```

**4. Run the server**

```
node ace serve
```

## Deployment

Use the provided [dockerfile](./Dockerfile) to deploy the application.
