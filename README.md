# GoTech Home Assignment

This project is a dynamic questionnaire written in ReactJS as part of the home assignment given by GoTech

## How to run

1. Open a terminal
2. Clone this project

```sh
git@github.com:EricMoIr/goform-client.git
```

3. Position yourself inside the folder of this project

```sh
cd goform-client
```

4. Download the project's dependencies

```sh
yarn
```

5. Run the application

```sh
yarn start
```

6. Run the mocked server with the questionnaire

```sh
yarn mock
```

Alternatively, run this application alongside its server-side project: [GoForm-Server](https://github.com/EricMoIr/goform-server)

## Notable libraries used

- [React-router](https://github.com/remix-run/react-router) for managing the routing and easier parsing of the route parameters
- [AntD](https://github.com/ant-design/ant-design) as the CSS Framework to build this application
- [Axios](https://github.com/axios/axios) as the HTTP client to consume our questionnaire backend

## Environment variables

All environment variables can be configured within the .env file

| Variable          | Description                               | Default Value         |
| ----------------- | ----------------------------------------- | --------------------- |
| REACT_APP_API_URL | Complete URL of the Questionnaire backend | http://localhost:8080 |
