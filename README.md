# Barker

## :zap: Twitter clone using dogs

- Simple full-stack app that shows a list of messages ('barks' or 'tweets') from the React client and processed on the Express server. Messages are saved in a hosted Mongodb database, MongoDB Atlas.

## :page_facing_up: Table of Contents

- [:zap: Barker](#zap-Barker)
  - [:page_facing_up: Table of Contents](#page_facing_up-table-of-contents)
  - [:books: General Info](#books-general-info)
  - [:camera: Screenshots](#camera-screen-shots)
  - [:microscope: Deep Dive](#microscope-deep-dive)
  - [:computer: Technologies](#computer-technologies)
  - [:floppy_disk: Setup](#floppy_disk-setup)
  - [:sunglasses: Features](#cool-features)
  - [:clipboard: Pending Features](#clipboard-pending-features)
  - [:clap: Inspiration](#clap-inspiration)
  - [:envelope: Contact](#envelope-contact)

## :books: General Info

- A simple Twitter clone using React for the frontend client, Express node.js for the backend server, and using MongoDB Atlas as the cloud hosted database. This was built to better understand React hooks and how to use hooks for authentication/authorization across the application.

- React is a separate frontend server, which is different than a view engine like EJS, PUG, or JADE. Using a view engine with Passport simplifies user authentication. However, I wanted to see how to pass the "app state" of an authenticated user across the application to different pages. The app was built by checking a few tutorials, MDN Docs, and googling Stackoverflow answers.

## :camera: Screenshots

![Screenshot1](/screenshots/barkerScreenshot1.png)

![Screenshot2](/screenshots/barkerScreenshot2.png)

## :microscope: Deep Dive

- App state is managed using the React Context API and the useContext hook. Context is used instead of Redux because, as in the words of Dan Abramov, the Context API is much improved, and unless the app needs to manage a large number of asynchronous resources, Context works well. Context is not as verbose as Redux, however there are some Redux patterns (reducers, actions, types) that are used with Context to handle user login and logout as well as error messages and alerts.
- The other question answered was how to best manage the flow of data on the frontend (component vs app state) and the flow of data between the frontend and backend. The answer was only as much as necessary and when needed.

## :computer: Technologies

- [Node.js ](https://nodejs.org/en/)
- [Express server](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud hosted database
- [React UI](https://reactjs.org/) for frontend user interface
- [JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken) for authentication
- [Bcryptjs](https://www.npmjs.com/package/bcryptjs) for hashing
- [Express Validator](https://www.npmjs.com/package/express-validator) another layer of validation

## :floppy_disk: Setup

- Normally, the setup would be to clone this repo, change directory into it, then type `npm install` and `npm client-install`, however because of the environment variables for Mongo Atlas, JWT secret, etc, etc,. and the associated setup with those services the easiest method is click on the link to the Heroku site either [here](https://blooming-reef-68471.herokuapp.com/) or below:

link: [https://blooming-reef-68471.herokuapp.com/](https://blooming-reef-68471.herokuapp.com/)

## :sunglasses: Features

- User login and logout
- Home page/Message Timeline is a protected route using a Higher Order Component (HOC)
- create & delete messages
- user authorization: only the creator of a message ('bark' or 'tweet') can delete their message
- messages are displayed by time in ascending order (most recent first).

## :clipboard: Pending Features

- Image upload for user profile image
- Image upload for barks/tweets
- UI refactor
- Enable Reply, ReBark, and Likes
- Threading for replies

## :clap: Inspiration

- The inspiration for this app was Twitter and getting practice with React hooks, using context to manage app state, specifically with user login, authorization, and logout; and comparing hooks to Redux.

* [Twitter](https://twitter.com/)
* [Frontend Masters: Complete Intro to React V6: hooks, effects, contexts, etc](https://frontendmasters.com/courses/complete-react-v6/)
* [Dan Abramov: Fundamentals of Redux](https://egghead.io/courses/fundamentals-of-redux-course-from-dan-abramov-bd5cc867)

## :envelope: Contact

- repo created by Don Spire [Nspired1](https://github.com/Nspired1), email: don.spire1@gmail.com
