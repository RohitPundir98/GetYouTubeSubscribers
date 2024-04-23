## Table of Contents

- [Home Page](#Home Page)
- [Get YouTube Subscribers](#get-youtube-subscribers)
- [Installation](#installation)
- [Features](#features)
- [Dependencies](#dependencies)
- [Documentation](#documentation)
- [API Endpoints](#api-endpoints)
- [Demo](#demo)

# Home Page

[![Home Page](/src/images/home.png)](/src/images/home.pnghome.png)

# Get YouTube Subscribers

The YouTube Subscribers is a simple backend project that provides a RESTful API for retrieving data about subscribers to YouTube channels. The project is built using Node.js and Express, and uses MongoDB as the database to store the subscriber data.

The API provides several endpoints that allow users to retrieve data in JSON format, including an endpoint to get all subscribers, an endpoint to get all subscribers' names and subscribed channels, and an endpoint to get details about a particular subscriber detail based on their ID. The project also handles error cases, such as when an incorrect subscriber ID is provided or when a user accesses an unknown endpoint.

The main purpose of this project is to provide a starting point for building a larger application that deals with YouTube data. The project can be used as a basis for building a more complex API that includes additional functionality, such as adding or deleting subscribers, searching for subscribers based on specific criteria, or integrating with the YouTube API to access data about channels and videos.

## Installation

To get started with the Project, you'll need to have Node.js and MongoDB installed on your machine. Once you have those installed, follow these steps:

```bash
Clone this repository to your local machine.
Install the required dependencies by running [npm install] in the project directory.
Start the server by running npm start. The server will be available at http://localhost:3000.
```

## Features

The following features are available in the API:

- Get an array of all subscribers in JSON format.
- Get an array of all subscribers' names and subscribed channels in JSON format.
- Get details about a particular subscriber based on their ID, including their name, subscribed channel, and subscribed date.
- Handle error cases, such as when an incorrect subscriber ID is provided or when a user accesses an unknown endpoint.

## Dependencies

The following dependencies are required to run the Get YouTube Subscribers :

```bash
NodeJs
ExpressJs
Mongoose
nodemon (optional)
```

**Note**: Please ensure that your code adheres to the existing style and passes the unit tests before submitting a pull request.

## Documentation

- [NodeJs](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## API Endpoints

1. GET http://localhost:3000/ → The client will see the Home Page!” in which there are all the get request as below.

2. GET http://localhost:3000/subscribers → When the user hit this, **endpoint /subscribers**, the client will **get an array of all subscribers in JSON format** from the database where the data is stored in local MongoDB database.

3. GET http://localhost:3000/subscribers/names →When the user hit this, endpoint **/subscribers/names** the client will to get an array of all subscribers in JSON format with **only name and subscribed Channel fields** from the database, where the data is stored in local MongoDB database.

4. GET http://localhost:3000/subscribers/:id → When the user hit this, endpoint **/subscribers/:id** in ID, the user needs to enter the USER’S ID which is stored in the database to get a particular **user’s details like name, subscribed Channel and subscribed Date** from the database, where the data is stored in local MongoDB database.

## Demo

[Click here to Visit Site](https://get-you-tube-subscribers-alma-better-hd4c-iamnaveensingh.vercel.app/).
