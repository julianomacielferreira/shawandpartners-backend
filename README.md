# Shaw and Partners Backend Test

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

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

# References

- Nest: [https://nestjs.com/](https://nestjs.com/)

- TypeScript: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

- Node.js: [https://nodejs.org/](https://nodejs.org/)

# License

Please see the [license agreement](https://github.com/julianomacielferreira/shawandpartners-backend/blob/master/LICENSE).

