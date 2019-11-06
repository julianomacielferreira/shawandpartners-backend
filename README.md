# Shaw and Partners Backend Test

<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="http://kamilmysliwiec.com/public/nest-logo.png#1" alt="Nest Logo" />
  </a>
</p>

<p align="center">
A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications. 
</p>

## Requirements

The specifications was taken from [https://shawandpartners.com/full-back-front-test/](https://shawandpartners.com/full-back-front-test/).

## 1 - [full-stack] [back-end]
Create an API that will proxy all client requests to the appropriate GitHub endpoint. The following endpoints must be provided:

- GET - /api/users?since={number}
This endpoint must return a list of GitHub users and the link for the next page.

- GET - /api/users/:username/details
This endpoint must return the details of a GitHub user

- GET - /api/users/:username/repos
This endpoint must return a list with all user repositories

## 2 - [full-stack (optional)] [back-end]
Create tests for your application covering all endpoints.

This project was generated with [Nest](https://github.com/nestjs/nest) framework.

## Dependencies

**Check if you have a recent version of [Node.js](https://nodejs.org/) (which comes bundled with [npm](https://www.npmjs.com/), a JavaScript package manager):**

```bash
$ node -v
```

```bash
$ npm -v
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

**And then access [http://localhost:3000](http://localhost:3000) on your browser.**

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

**Obs.: Not implemented.**

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

# References

- Nest: [https://nestjs.com/](https://nestjs.com/)

- TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- Node.js: [https://nodejs.org/](https://nodejs.org/)

# License

Please see the [license agreement](https://github.com/julianomacielferreira/shawandpartners-backend/blob/master/LICENSE).

