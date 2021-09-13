# Barker

## :zap: Twitter clone using dogs

- Simple full-stack app that shows a list, or an array, of messages ('barks' or 'tweets') from the React client and processed on the backend Express server. Messages are saved in a hosted Mongodb database, MongoDB Atlas.

## :page_facing_up: Table of Contents

- [:zap: Barker](#zap-Barker)
  - [:page_facing_up: Table of Contents](#page_facing_up-table-of-contents)
  - [:books: General Info](#books-general-info)
  - [:microscope: Deep Dive](#microscope-deep-dive)
  - [:computer: Technologies](#signal_strength_technologies)
  - [:floppy_disk: Setup](#floppy_disk-setup)
  - [:sunglasses: Features](#cool-features)
  - [:clap: Inspiration](#clap-inspiration)
  - [:envelope: Contact](#envelope-contact)

## :books: General Info

- A simple Twitter clone using React for the frontend client and Express node.js server for the backend with MongoDB Atlas as the cloud hosted database. Wanted to better understand React hooks and using hooks for authentication with JSON Web Tokens (JWTs), so checked a few tutorials and built a Twitter clone.

## :microscope: Deep Dive

- App state management is using the React Context API and the useContext hook. Context was used instead of Redux because, as per Dan Abramov, the Context API is much improved, and unless the app needs to manage a large number of asynchronous resources Context works well. Context is not as verbose as Redux, however there are some Redux patterns (reducers, actions, types) that are used with Context to handle user login and logout as well as error messages and alerts.
- The other question answered was how to best manage the flow of data on the frontend (component vs app state) and the flow of data between the frontend and backend. The answer was only as much as necessary and when needed.
  A simple example was when to send the username and profile image url. The user enters the username when they edit their profile (in an effort to make signup fast and easy), but when is that sent to the frontend? For this app, the server attaches that data (or populates using MongoDB methods) on to the message and sends it to the frontend. The server doesn't send the image, but the URL for that profile image and the frontend requests the image from Cloudinary.

## :computer: Technologies

- [Node.js ](https://nodejs.org/en/)
- [Express server](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosted database
- [Cloudinary](https://cloudinary.com/)
- [React UI](https://reactjs.org/) for frontend user interface
- [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) for authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) for hashing
- [Express Validator](https://www.npmjs.com/package/express-validator) another layer of validation

## :floppy_disk: Setup

- Normally, the setup would be to clone this repo, change directory into it, then type `npm install`, however because of the environment variables for Mongo Atlas, JWT secret, etc, etc,. and the associated setup with those services the easiest method is click on the link to the Heroku site

## :sunglasses: Features

- User login and logout
- Home page/Message Timeline is a protected route using a Higher Order Component (HOC)
- create & delete messages
- user authorization: only the creator of a message ('bark' or 'tweet') can delete their message
- messages are displayed by time in ascending order (most recent first).

## :clap: Inspiration

- The inspiration for this app was Twitter and getting practice with React hooks, using context to manage app state, specifically with user login, authorization, and logout; and comparing hooks to Redux.

* [Twitter](https://twitter.com/)
* [Frontend Masters: Complete Intro to React V6: hooks, effects, contexts, etc](https://frontendmasters.com/courses/complete-react-v6/)
* [Dan Abramov: Fundamentals of Redux](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

## :envelope: Contact

- repo created by Don Spire [Nspired1](https://github.com/Nspired1/barker4), email: don.spire1@gmail.com
