# ✏️ Bun-Todos

This is a fun project for beginners who are wising to get started with **Next Js** with **Bun, Zod, TailwindCSS, Kinde and MongoDB**. In This Course We are going to build a fullstack **_todo list_** where a user can perform all kinds of **CRUD** Operations with its todo.

## Installation & Setup

1. Install Bun in your system(Mac/Linux/Windows SubSystem in Linux(WSL)):

   ```
   curl -fsSL https://bun.sh/install | bash
   ```

   If you are on mac or linux it will show you the command to congiure it to the path.

   Now you can run **`bun`** in your terminal to check bun is working or not!

2. Configure Your Next App:

   If **Bun** is installed and configured in your system successfully you can run this command to initialize your **next app**:

   ```
    bun c next-app@latest bun-todos
   ```

   OR

   If **Bun** is **not** installed and configured in your system, then you can use **`yarn or npm`** to initialize your **next app**:

   ```
    npx create-next-app@latest bun-todos
   ```

   ```
    yarn create next-app@latest bun-todos
   ```

## Lockfiles

1. **bun.lockb**

   Running **`bun install`** will create a binary lockfile called **`bun.lockb`**.

2. **yarn.lock**

   Generate a human readable lockfile **`bun install --yarn`**

## Envirinment Variables

```
KINDE_CLIENT_ID=
KINDE_CLIENT_SECRET=
KINDE_ISSUER_URL=

KINDE_SITE_URL=http://localhost:3000
KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

DOMAIN=http://localhost:3000
MONGODB_URI=
```

## Packages Used

Here is my **package.json**

```
{
  "name": "bun-todos",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@kinde-oss/kinde-auth-nextjs": "^1.8.18",
    "@types/node": "20.6.0",
    "@types/react": "18.2.21",
    "@types/react-dom": "18.2.7",
    "autoprefixer": "10.4.15",
    "eslint": "8.49.0",
    "eslint-config-next": "13.4.19",
    "mongoose": "^7.5.0",
    "next": "13.4.19",
    "postcss": "8.4.29",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "react-icons": "^4.11.0",
    "tailwindcss": "3.3.3",
    "typescript": "5.2.2",
    "zod": "^3.22.2"
  }
}

```

## YouTube

## Tech Stack

## Contributors
