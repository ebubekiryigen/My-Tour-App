## Getting Started

First, install the development server:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Complete the prisma installation

```bash
npx prisma generate
```

Running a server

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```


## Project Requirements

To set up the project, follow the steps below:

1. Create an `.env` file in the project's root directory.
2. Add the following headers to your `.env` file:
    · `DATABASE_URL`: Your MongoDB database connection.
    · `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Information obtained from the Google server.
    · `NEXTAUTH_SECRET`: A unique encryption key of your choice.