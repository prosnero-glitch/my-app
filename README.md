# My App

A small React application built with Vite and TypeScript. This project demonstrates a simple interactive UI with a counter, name input, and greeting state.

## Features

- React 19 with TypeScript
- Vite for fast development and production builds
- Interactive counter with increase, decrease, and reset actions
- Input field that displays a personalized greeting
- Reusable component-based structure

## Project Structure

```text
my-app/
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── main.tsx
│   └── components/
│       ├── Counter.tsx
│       ├── Footer.tsx
│       ├── Header.tsx
│       ├── Message.tsx
│       └── Paragraph.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
├── index.html
└── README.md
```

## Prerequisites

Make sure you have the following installed:

- Node.js (v18 or later recommended)
- npm

## Installation

```bash
npm install
```

## Running the App

Start the development server:

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Production Build

Create a production build:

```bash
npm run build
```

## Linting

Run ESLint checks:

```bash
npm run lint
```

## Deploying to GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds and publishes the site whenever changes are pushed to `master`.

In the repository settings, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. After the workflow completes, the site will be available at:

https://prosnero-glitch.github.io/my-app/

## Notes

This project is a beginner-friendly React setup intended to practice UI composition, state management, and event handling in a simple front-end app.
