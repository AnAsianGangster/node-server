# Book Review 

## Description
#### express sequelize mysql

## Install
```shell
$ yarn install
```
configuration
```shell
$ cd app && mkdir config && cd config && touch db.config.js
```
sample db.config.js
```javascript
module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'password',
    DB: 'BookReview',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
```
>Note: Need to create a DB with with the same name first (can be empty)

## Usage
root
```
http://localhost:5000
```
API
```
http://localhost:5000/api
```

>Note: There are some sample API calls in [resquests.rest](https://github.com/AnAsianGangster/node-server/blob/master/requests.rest)

| Request   | Location       | Description                |
| --------- |:--------------:| --------------------------:|
| `POST`    | /reviews       | new review                 |
| `GET`     | /reviews       | get all reviews            |
| `GET`     | /reviews/`id`  | get review with id         |
| `POST`    | /books         | new book                   |
| `GET`     | /books/        | get all books with reviews |
| `GET`     | /books/`asin`  | get book with id           |
| `POST`    | /auth/signup   | new user                   |
| `POST`    | /auth/signin   | authenticate user          |
| `GET`     | /all           | public content             |
| `GET`     | /user          | user content               |
| `GET`     | /mod           | moderator content          |
| `GET`     | /admin         | admin content              |
