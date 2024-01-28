# Project Requirements

To set up the project, follow the steps below:

1. Create an `.env` file in the project's root directory.
2. Add the following headers to your `.env` file:

  - `DATABASE_URL`: Your MongoDB database connection.

  - `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`: Information obtained from the Google server.

  - `NEXTAUTH_SECRET`: A unique encryption key of your choice.

# Getting Started

## First, install the development server:

```bash
npm install
# or
yarn install
# or
pnpm install
```

## Complete the prisma installation

```bash
npx prisma db push
npx prisma generate
```

The prisma schema is located in the prisma folder within the project.


## Running a server

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```


# Project description

The main purpose of the project is to provide users with a platform to easily create and manage their personal vacation plans. On this platform, users can create an account to start building their own custom vacation plans. After creating an account, users can add and track details of their vacation plans.

The system offers users various options to customize their vacation plans. Users can personalize their plans by specifying accommodation, places to visit, and other important details. Additionally, users can enhance their memories by adding images related to their vacation plans.


## The technologies used in this project

`NEXT.JS v13`: The JavaScript library used for project development.

`MongoDB`: It is used for storing the project's data in the database.

`Prisma`: Used for performing database operations in the project.

`Next Auth`: Employed for handling login processes in the project.

`React icons`: Used for project icons.

`Redux Toolkit`: Utilized for state management.

`Axios`: Used for making HTTP requests.

`React Toastify`: Employed for reflecting status information in the project.

`world-countries`: Used for retrieving country names.

`bcrypt`: Employed for encryption processes.

`React Select`: Used for customizable selection menus.

`React Hook Form`: Utilized for managing forms.

