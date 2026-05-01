# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

Following F.Herrera's Nuxt course: https://knowmadmood.udemy.com/course/nuxt-web-progresivo

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## Database Scripts (Prisma)

These scripts are useful when working with the database schema and seed data.

### 1) `prisma:generate`

How to use it:

```bash
# npm
npm run prisma:generate
```

What it is for:
- Regenerates Prisma Client from `prisma/schema.prisma`.
- Required after model changes, migrations, or when Prisma client files are missing/outdated.

When to use it:
- After editing the Prisma schema.
- After pulling changes that include Prisma model updates.
- Before running scripts or APIs that use Prisma if you see client initialization errors.

Example scenario:
- You add a new field in a Prisma model and need the new typed client available in the app.

### 2) `seed`

How to use it:

```bash
# npm
npm run seed
```

What it is for:
- Runs `prisma:generate` first and then executes `seed/seed-database.ts`.
- Populates the database with initial data (for this project, site reviews).

When to use it:
- Right after setting up the project locally.
- After resetting/truncating the database.
- When you need known test/demo data quickly.

Example scenario:
- You start with an empty database and want the home page testimonials to have data immediately.

### 3) `migrate:site-review-profile-image`

How to use it:

```bash
# npm
npm run migrate:site-review-profile-image
```

What it is for:
- Executes `prisma migrate dev --name site-review-profile-image`.
- Creates/applies a migration and updates the schema history.

When to use it:
- During local development after changing Prisma models.
- When you need to persist structural DB changes in a migration file.

Example scenario:
- You add `profileImage` to `SiteReview` and want that change reflected in your local DB and migration files.

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
