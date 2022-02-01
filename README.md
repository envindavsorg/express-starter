# Express Starter 😇

Boilerplate/Generator/Starter Project for building a website using Node.js, Express and Pug.

## Features

 - No transpilers, just vanilla javascript
 - ES2017 latest features like Async/Await
 - CORS enabled
 - Uses [Bootstrap 5 (latest version)](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
 - Uses SCSS for styling
 - LiveReload (server and browser)
 - Uses [yarn](https://yarnpkg.com)
 - Express + ([Pug](https://pugjs.org/api/getting-started.html))
 - Uses [helmet](https://github.com/helmetjs/helmet) to set some HTTP headers for security
 - Load environment variables from .env files with [dotenv](https://github.com/rolodato/dotenv-safe)
 - Gzip compression with [compression](https://github.com/expressjs/compression)
 - Linting with [eslint](http://eslint.org)

## Requirements

 - [Node v7.6+](https://nodejs.org/en/download/current/)
 - [Yarn](https://yarnpkg.com/en/docs/install)

## Getting Started

#### Clone the repo and make it yours:

```bash
git clone https://github.com/envindavsorg/express-starter
cd express-starter
rm -rf .git
```

#### Install dependencies:

```bash
yarn or npm i
```

#### Set environment variables:

```bash
cp .env.example .env
```

## Running Locally

```bash
npm run dev
```

## Lint

```bash
# lint code with ESLint
npm run lint
```
## License

[MIT License](README.md) - [Cuzeac FLorin](https://github.com/envindavsorg)
