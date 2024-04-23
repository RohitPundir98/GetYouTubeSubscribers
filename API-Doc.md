# Get YouTube Subscribers API Documentation

[Click here to Visit Site](https://youtube-subs-two.vercel.app/).

## Introduction

The API documentation for Get YouTube Subscribers provides details on how to interact with the API endpoints to retrieve subscribers information.

## Base URL

The base URL for all endpoints is:

```
 http://localhost:3000
```

## Authentication

This API does not require authentication for accessing the public endpoints. Simply make the required HTTP requests to start utilizing the API.

## Error Handling

In case of errors, the API will respond with appropriate error status codes and error messages. Please refer to the [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) documentation for more information.

## Endpoints

- [Get Subscribers](#get-subscribers) (`/subscribers`)
- [Get Subscribers by Names](#get-subscribers-by-names) (`/subscribers/names`)
- [Get Subscriber by ID](#get-subscriber-by-id) (`/subscribers/:id`)

  ### Get Subscribers

  ***

  **Description:** Retrieve a list of all subscribers.

  - **Endpoint:** `/subscribers`
  - **Method:** `GET`
  - **Response:**
    - Status Code: `200 OK`
    - Example Response:
      ![Home Page](/src/images/returnSubscribers.png)
  - **Endpoint-Specific Error**
    - Error : `500 (Bad Request)`
    - Error Message: `Internal Server Error`

  ### Get Subscribers by Names

  ***

  **Description:** Retrieve subscribers based on their name.

  - **Endpoint:** `/subscribers/names `
  - **Method:** `GET`
  - **Query Parameters:**
    - `names` (required): The name of the subscribers to search for.
  - **Response:**
    - Status Code: `200 OK`
    - Example Response:
      ![Home Page](/src/images/returnSubscribersNames.png)
    - **Endpoint-Specific Error**
    - Status Code: `500 (Bad Request)`
    - Message: `Internal Server Error`

  ### Get Subscriber by ID

  ***

  **Description:** Retrieve a specific subscriber based on their ID.

  - **Endpoint:** `/subscribers/:id`
  - **Method:** `GET`
  - **Query Parameters:**
    - `id` (required): The ID of the subscriber to retrieve data.
  - **Response:**
    - Status Code: `200 OK`
    - Example Response:
      ![Home Page](/src/images/returnSubscriberIDdetails.png)
  - **Endpoint-Specific Error**: - Status Code: `400 (Bad Request)` - Message: `Subscriber dosen't exixt with the given ID` - Example Response:
    ![Id not Found](/src/images/returnIDNotFound.png)

###

## Conclusion

This API documentation provides a comprehensive guide on how to interact with the API endpoints to retrieve subscribers information.
