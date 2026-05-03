
# Film Collection

## Deploy

[GitHub Pages deploy link](https://atikin132.github.io/film-collection/home)

Screenshot:

<img width="1512" height="813" alt="Снимок экрана 2026-05-03 в 17 38 17" src="https://github.com/user-attachments/assets/4ce0cc67-8eec-421a-bfb8-e3120a075a40" />


## About

Film Collection is an Angular tutorial application created to practice the framework's modern capabilities. The project is built on Angular 21 and uses a standalone architecture without NgModules. The main goal of the application is to explore Angular's capabilities and work with Signals.

This app was created as part of the **Rolling Scopes School Angular 2026 Q2 course**.

## Tech stack

- **Angular 21.2.8** (signals, standalone APIs, pipes, directives)
- **TypeScript** (strict mode, type guards)
- **ESLint** with `@angular-eslint` and **Prettier**
- **Husky** (pre-commit, pre-push) and **Commitlint**(commit-msg)
- **GitHub Pages** for deployment

## Installation

1. Clone repository:

```bash
git clone https://github.com/Atikin132/film-collection.git
```

2. Go to the project folder:

```bash
cd film-collection
```

3. Install dependencies:

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
npm start
```

After starting the server, open a browser and navigate to `http://localhost:4200/`. If port 4200 is in use, the terminal will prompt you to use a different port. The application will automatically restart whenever the source files change.

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and save the build files in the `dist/` directory.

## Linting and format

To run linter:

```bash
npm run lint
```

To format code with prettier:

```bash
npm run format
```
